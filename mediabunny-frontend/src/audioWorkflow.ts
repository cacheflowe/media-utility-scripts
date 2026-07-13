import {
  Input,
  ALL_FORMATS,
  BlobSource,
  Output,
  BufferTarget,
  Conversion,
  Mp3OutputFormat,
  Mp4OutputFormat,
  OggOutputFormat,
  WavOutputFormat,
  FlacOutputFormat,
  canEncodeAudio,
  type OutputFormat,
  type ConversionAudioOptions,
  type AudioCodec,
} from "mediabunny";

type CreateAudioWorkflowOptions = {
  /** Root to query into: `document` (standalone) or a `ShadowRoot` (component). */
  root: Document | ShadowRoot;
  formatBytes: (bytes: number, decimals?: number) => string;
  revealLoadedSection: () => void;
};

type AudioFormatSpec = {
  makeFormat: () => OutputFormat;
  codec: AudioCodec;
  ext: string;
  mime: string;
  lossless: boolean;
};

const AUDIO_FORMATS: Record<string, AudioFormatSpec> = {
  mp3: { makeFormat: () => new Mp3OutputFormat(), codec: "mp3", ext: "mp3", mime: "audio/mpeg", lossless: false },
  m4a: { makeFormat: () => new Mp4OutputFormat(), codec: "aac", ext: "m4a", mime: "audio/mp4", lossless: false },
  opus: { makeFormat: () => new OggOutputFormat(), codec: "opus", ext: "ogg", mime: "audio/ogg", lossless: false },
  wav: { makeFormat: () => new WavOutputFormat(), codec: "pcm-s16", ext: "wav", mime: "audio/wav", lossless: true },
  flac: { makeFormat: () => new FlacOutputFormat(), codec: "flac", ext: "flac", mime: "audio/flac", lossless: true },
};

export function createAudioWorkflow({ root, formatBytes, revealLoadedSection }: CreateAudioWorkflowOptions) {
  function getElement<T extends HTMLElement>(id: string, expected: string): T {
    const el = root.getElementById(id);
    if (!el) throw new Error(`DOM element not found: #${id} (expected ${expected})`);
    return el as T;
  }

  const audioPreview = getElement<HTMLAudioElement>("audio-preview", "audio#audio-preview");
  const waveformCanvas = getElement<HTMLCanvasElement>("audio-waveform", "canvas#audio-waveform");
  const metaName = getElement<HTMLSpanElement>("audio-meta-name", "span");
  const metaSize = getElement<HTMLSpanElement>("audio-meta-size", "span");
  const metaDuration = getElement<HTMLSpanElement>("audio-meta-duration", "span");
  const metaCodec = getElement<HTMLSpanElement>("audio-meta-codec", "span");
  const metaSampleRate = getElement<HTMLSpanElement>("audio-meta-samplerate", "span");
  const metaChannels = getElement<HTMLSpanElement>("audio-meta-channels", "span");
  const metaBitrate = getElement<HTMLSpanElement>("audio-meta-bitrate", "span");

  const form = getElement<HTMLFormElement>("audio-form", "form#audio-form");
  const enableTrim = getElement<HTMLInputElement>("audio-enable-trim", "input");
  const trimControls = getElement<HTMLDivElement>("audio-trim-controls", "div");
  const trimStart = getElement<HTMLInputElement>("audio-trim-start", "input");
  const trimEnd = getElement<HTMLInputElement>("audio-trim-end", "input");
  const trimStartVal = getElement<HTMLSpanElement>("audio-trim-start-val", "span");
  const trimEndVal = getElement<HTMLSpanElement>("audio-trim-end-val", "span");
  const trimSelectionBar = getElement<HTMLDivElement>("audio-trim-selection-bar", "div");

  const outFormat = getElement<HTMLSelectElement>("audio-out-format", "select");
  const outBitrate = getElement<HTMLSelectElement>("audio-out-bitrate", "select");
  const outSampleRate = getElement<HTMLSelectElement>("audio-out-samplerate", "select");
  const outChannels = getElement<HTMLSelectElement>("audio-out-channels", "select");

  const processBtn = getElement<HTMLButtonElement>("audio-process-btn", "button");
  const cancelBtn = getElement<HTMLButtonElement>("audio-cancel-btn", "button");
  const sizeEstimate = getElement<HTMLElement>("audio-size-estimate", "strong");
  const outputPlaceholder = getElement<HTMLElement>("audio-output-placeholder", "div");
  const progressSection = getElement<HTMLElement>("audio-progress-section", "section");
  const progressTitle = getElement<HTMLElement>("audio-progress-title", "span");
  const progressPct = getElement<HTMLElement>("audio-progress-pct", "strong");
  const progressBar = getElement<HTMLProgressElement>("audio-progress", "progress");
  const resultSection = getElement<HTMLElement>("audio-result-section", "section");
  const outputPreview = getElement<HTMLAudioElement>("audio-output-preview", "audio");
  const downloadAnchor = getElement<HTMLAnchorElement>("audio-download-anchor", "a");
  const outputSizeTag = getElement<HTMLElement>("audio-output-size-tag", "span");

  let currentFile: File | null = null;
  let currentInput: Input | null = null;
  let sourceDuration = 0;
  let currentConversion: Conversion | null = null;
  let isDraggingTrim = false;
  let objectUrl: string | null = null;
  let outputUrl: string | null = null;

  // Waveform state
  let peaks: { min: number; max: number }[] = [];
  let audioCtx: AudioContext | null = null;
  let loadSeq = 0;

  function revokeUrls() {
    if (objectUrl) {
      URL.revokeObjectURL(objectUrl);
      objectUrl = null;
    }
    if (outputUrl) {
      URL.revokeObjectURL(outputUrl);
      outputUrl = null;
    }
  }

  function formatDuration(sec: number) {
    if (isNaN(sec) || !isFinite(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    const ms = Math.floor((sec % 1) * 100);
    return `${m}:${s.toString().padStart(2, "0")}.${ms.toString().padStart(2, "0")}`;
  }

  function currentFormatSpec() {
    return AUDIO_FORMATS[outFormat.value] || AUDIO_FORMATS.mp3;
  }

  function updateSizeEstimate() {
    if (!sourceDuration) {
      sizeEstimate.textContent = "—";
      return;
    }
    let duration = sourceDuration;
    if (enableTrim.checked) {
      const s = parseFloat(trimStart.value);
      const e = parseFloat(trimEnd.value);
      if (!isNaN(s) && !isNaN(e) && e > s) duration = e - s;
    }

    const spec = currentFormatSpec();
    let bytes: number;
    if (spec.ext === "wav") {
      // PCM: sampleRate × channels × 2 bytes × duration
      const sr = parseInt(outSampleRate.value) || 44100;
      const ch = parseInt(outChannels.value) || 2;
      bytes = sr * ch * 2 * duration;
    } else if (spec.lossless) {
      // FLAC ~ roughly 60% of PCM
      const sr = parseInt(outSampleRate.value) || 44100;
      const ch = parseInt(outChannels.value) || 2;
      bytes = sr * ch * 2 * duration * 0.6;
    } else {
      bytes = ((parseInt(outBitrate.value) || 192000) * duration) / 8;
    }
    sizeEstimate.textContent = "≈ " + formatBytes(bytes);
  }

  function updateFormatUI() {
    // Bitrate only applies to lossy formats
    outBitrate.disabled = currentFormatSpec().lossless;
    updateSizeEstimate();
  }

  // Mark output formats whose codec the browser can't encode (e.g. MP3 in Chrome)
  // and fall back to the first supported option.
  async function refreshFormatSupport() {
    for (const opt of Array.from(outFormat.options)) {
      const spec = AUDIO_FORMATS[opt.value];
      if (!spec) continue;
      let ok = false;
      try {
        ok = await canEncodeAudio(spec.codec);
      } catch {
        ok = false;
      }
      opt.disabled = !ok;
      const base = opt.textContent!.replace(/ — unavailable$/, "");
      opt.textContent = ok ? base : `${base} — unavailable`;
    }
    if (outFormat.selectedOptions[0]?.disabled) {
      const firstOk = Array.from(outFormat.options).find((o) => !o.disabled);
      if (firstOk) outFormat.value = firstOk.value;
    }
    updateFormatUI();
  }

  function updateTrimVisuals(startVal: number, endVal: number) {
    trimStartVal.textContent = `${startVal.toFixed(2)}s`;
    trimEndVal.textContent = `${endVal.toFixed(2)}s`;
    if (sourceDuration) {
      trimSelectionBar.style.left = `${(startVal / sourceDuration) * 100}%`;
      trimSelectionBar.style.width = `${((endVal - startVal) / sourceDuration) * 100}%`;
    }
    drawWaveform();
  }

  // --- Waveform ---
  function drawWaveform() {
    const w = waveformCanvas.clientWidth || 300;
    const h = waveformCanvas.clientHeight || 90;
    const dpr = window.devicePixelRatio || 1;
    waveformCanvas.width = Math.round(w * dpr);
    waveformCanvas.height = Math.round(h * dpr);
    const ctx = waveformCanvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    const mid = h / 2;
    const amp = mid - 2;
    const color = getComputedStyle(waveformCanvas).color || "#ff6b81";

    if (peaks.length) {
      ctx.fillStyle = color;
      const n = peaks.length;
      for (let x = 0; x < w; x++) {
        const p = peaks[Math.floor((x / w) * n)] || { min: 0, max: 0 };
        const y1 = mid - p.max * amp;
        const y2 = mid - p.min * amp;
        ctx.fillRect(x, y1, 1, Math.max(1, y2 - y1));
      }
    }

    // Dim the region outside the trim selection
    if (enableTrim.checked && sourceDuration) {
      const s = (parseFloat(trimStart.value) / sourceDuration) * w;
      const e = (parseFloat(trimEnd.value) / sourceDuration) * w;
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fillRect(0, 0, Math.max(0, s), h);
      ctx.fillRect(Math.min(w, e), 0, w - Math.min(w, e), h);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.strokeRect(s + 0.5, 0.5, Math.max(0, e - s) - 1, h - 1);
    }

    // Playhead
    if (sourceDuration && audioPreview.currentTime > 0) {
      const px = (audioPreview.currentTime / sourceDuration) * w;
      ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
      ctx.fillRect(px, 0, 1.5, h);
    }
  }

  async function buildWaveform(file: File, token: number) {
    peaks = [];
    drawWaveform();
    try {
      const arr = await file.arrayBuffer();
      audioCtx ||= new (window.AudioContext || (window as any).webkitAudioContext)();
      const audioBuffer = await audioCtx.decodeAudioData(arr);
      if (token !== loadSeq) return; // a newer file was loaded meanwhile

      const buckets = 800;
      const ch = audioBuffer.getChannelData(0);
      const step = Math.max(1, Math.floor(ch.length / buckets));
      const next: { min: number; max: number }[] = [];
      for (let b = 0; b < buckets; b++) {
        let mn = 1;
        let mx = -1;
        const start = b * step;
        const end = Math.min(ch.length, start + step);
        for (let i = start; i < end; i++) {
          const v = ch[i];
          if (v < mn) mn = v;
          if (v > mx) mx = v;
        }
        next.push(end > start ? { min: mn, max: mx } : { min: 0, max: 0 });
      }
      peaks = next;
      drawWaveform();
    } catch (err) {
      console.warn("Could not render audio waveform (format may be undecodable by WebAudio):", err);
    }
  }

  waveformCanvas.addEventListener("click", (e) => {
    if (!sourceDuration) return;
    const rect = waveformCanvas.getBoundingClientRect();
    const frac = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audioPreview.currentTime = frac * sourceDuration;
    drawWaveform();
  });

  audioPreview.addEventListener("timeupdate", () => drawWaveform());
  window.addEventListener("resize", () => drawWaveform());

  async function load(file: File) {
    dispose();
    currentFile = file;
    resultSection.style.display = "none";
    outputPlaceholder.style.display = "";
    progressSection.style.display = "none";

    objectUrl = URL.createObjectURL(file);
    audioPreview.src = objectUrl;

    // Decode + draw the waveform in parallel with metadata reads
    void buildWaveform(file, ++loadSeq);

    metaName.textContent = file.name;
    metaSize.textContent = formatBytes(file.size);

    try {
      currentInput = new Input({ formats: ALL_FORMATS, source: new BlobSource(file) });
      const format = await currentInput.getFormat();
      console.log(`Detected audio container: ${format.name} (${format.mimeType})`);

      const track = await currentInput.getPrimaryAudioTrack();
      if (!track) {
        metaCodec.textContent = "No audio track";
        console.warn("No audio track found in this file.");
        revealLoadedSection();
        return;
      }

      const codec = await track.getCodec();
      sourceDuration = await currentInput.computeDuration();

      metaCodec.textContent = String(codec || "unknown").toUpperCase();
      metaDuration.textContent = formatDuration(sourceDuration);
      metaSampleRate.textContent = track.sampleRate ? `${track.sampleRate.toLocaleString()} Hz` : "-";
      metaChannels.textContent = String(track.numberOfChannels || "-");

      // Estimate source bitrate from file size / duration
      if (sourceDuration > 0) {
        const kbps = (file.size * 8) / sourceDuration / 1000;
        metaBitrate.textContent = `~${Math.round(kbps)} kbps`;
      } else {
        metaBitrate.textContent = "-";
      }

      // Init trim sliders
      trimStart.max = String(sourceDuration);
      trimEnd.max = String(sourceDuration);
      trimStart.value = "0";
      trimEnd.value = String(sourceDuration);
      updateTrimVisuals(0, sourceDuration);

      console.log(`Loaded audio: "${file.name}" — ${formatDuration(sourceDuration)}, ${track.sampleRate}Hz, ${track.numberOfChannels}ch.`);
      revealLoadedSection();
      updateFormatUI();
    } catch (error: any) {
      console.error("Error analyzing audio file: ", error);
      alert(`Could not read audio metadata: ${error.message || error}`);
    }
  }

  // --- Trim interactions ---
  enableTrim.addEventListener("change", () => {
    if (enableTrim.checked) {
      trimControls.style.display = "block";
      audioPreview.pause();
      const s = parseFloat(trimStart.value);
      updateTrimVisuals(s, parseFloat(trimEnd.value));
      audioPreview.currentTime = s;
    } else {
      trimControls.style.display = "none";
    }
    updateSizeEstimate();
  });

  trimStart.addEventListener("input", () => {
    isDraggingTrim = true;
    audioPreview.pause();
    let s = parseFloat(trimStart.value);
    const e = parseFloat(trimEnd.value);
    if (s >= e) {
      s = Math.max(0, e - 0.05);
      trimStart.value = String(s);
    }
    trimStart.style.zIndex = "3";
    trimEnd.style.zIndex = "2";
    updateTrimVisuals(s, e);
    audioPreview.currentTime = s;
  });

  trimEnd.addEventListener("input", () => {
    isDraggingTrim = true;
    audioPreview.pause();
    const s = parseFloat(trimStart.value);
    let e = parseFloat(trimEnd.value);
    if (e <= s) {
      e = Math.min(sourceDuration, s + 0.05);
      trimEnd.value = String(e);
    }
    trimStart.style.zIndex = "2";
    trimEnd.style.zIndex = "3";
    updateTrimVisuals(s, e);
    audioPreview.currentTime = e;
  });

  [trimStart, trimEnd].forEach((el) =>
    ["change", "mouseup", "touchend"].forEach((ev) =>
      el.addEventListener(ev, () => {
        isDraggingTrim = false;
      }),
    ),
  );

  audioPreview.addEventListener("timeupdate", () => {
    if (enableTrim.checked && !isDraggingTrim) {
      const e = parseFloat(trimEnd.value);
      if (audioPreview.currentTime >= e) {
        audioPreview.pause();
        audioPreview.currentTime = parseFloat(trimStart.value);
      }
    }
  });

  // --- Format / estimate ---
  outFormat.addEventListener("change", updateFormatUI);
  form.addEventListener("input", updateSizeEstimate);
  form.addEventListener("change", updateSizeEstimate);

  // --- Conversion ---
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!currentFile || !currentInput) {
      alert("Please load an audio file first.");
      return;
    }

    processBtn.style.display = "none";
    cancelBtn.style.display = "inline-block";
    progressSection.style.display = "block";
    resultSection.style.display = "none";
    outputPlaceholder.style.display = "none";
    progressBar.value = 0;
    progressPct.textContent = "0%";
    progressTitle.textContent = "🎵 Initializing audio pipeline...";

    try {
      const spec = currentFormatSpec();
      const target = new BufferTarget();
      const output = new Output({ format: spec.makeFormat(), target });

      const audioConfig: ConversionAudioOptions = {
        forceTranscode: true,
        codec: spec.codec,
      };
      if (!spec.lossless) audioConfig.bitrate = parseInt(outBitrate.value) || 192000;
      const sr = parseInt(outSampleRate.value);
      if (sr > 0) audioConfig.sampleRate = sr;
      const ch = parseInt(outChannels.value);
      if (ch > 0) audioConfig.numberOfChannels = ch;

      const trim =
        enableTrim.checked && sourceDuration
          ? { start: parseFloat(trimStart.value), end: parseFloat(trimEnd.value) }
          : undefined;

      currentConversion = await Conversion.init({ input: currentInput, output, audio: audioConfig, trim });

      if (!currentConversion.isValid) {
        currentConversion.discardedTracks.forEach((t) => console.warn(`Track discarded: ${t.reason}`));
        throw new Error("This audio format/codec combination is not supported.");
      }

      currentConversion.onProgress = (progress) => {
        const pct = Math.min(100, Math.round(progress * 100));
        progressBar.value = pct;
        progressPct.textContent = `${pct}%`;
        progressTitle.textContent = `🎵 Transcoding audio (${pct}%)`;
      };

      console.log(`🚀 Converting audio to ${spec.ext.toUpperCase()} (${spec.codec})...`);
      await currentConversion.execute();

      const buffer = target.buffer;
      if (!buffer) throw new Error("Conversion produced an empty buffer.");

      const blob = new Blob([buffer], { type: spec.mime });
      if (outputUrl) URL.revokeObjectURL(outputUrl);
      outputUrl = URL.createObjectURL(blob);

      const dot = currentFile.name.lastIndexOf(".");
      const base = dot > 0 ? currentFile.name.slice(0, dot) : currentFile.name;
      downloadAnchor.href = outputUrl;
      downloadAnchor.download = `${base}_web_export.${spec.ext}`;
      outputPreview.src = outputUrl;
      outputSizeTag.textContent = `Size: ${formatBytes(blob.size)}`;

      console.log(`🎉 Audio conversion complete! Output: ${formatBytes(blob.size)} (${spec.ext.toUpperCase()}).`);
      resultSection.style.display = "block";
      resultSection.scrollIntoView({ behavior: "smooth" });
    } catch (error: any) {
      if (error.name === "ConversionCanceledError" || error.message?.includes("canceled")) {
        console.warn("Audio conversion canceled.");
      } else {
        console.error("Audio conversion failed: ", error);
        alert(`Audio conversion failed: ${error.message || error}`);
      }
    } finally {
      processBtn.style.display = "inline-block";
      cancelBtn.style.display = "none";
      progressSection.style.display = "none";
      if (resultSection.style.display === "none") outputPlaceholder.style.display = "";
      currentConversion = null;
    }
  });

  cancelBtn.addEventListener("click", async () => {
    if (currentConversion) {
      console.log("Requesting cancellation of audio conversion...");
      await currentConversion.cancel();
    }
  });

  function dispose() {
    if (currentInput) {
      currentInput.dispose();
      currentInput = null;
    }
    revokeUrls();
    audioPreview.removeAttribute("src");
    outputPreview.removeAttribute("src");
    sourceDuration = 0;
    currentFile = null;
    isDraggingTrim = false;
    loadSeq++; // invalidate any in-flight waveform decode
    peaks = [];
    drawWaveform();
  }

  function setActive(active: boolean) {
    if (!active) audioPreview.pause();
  }

  updateFormatUI();
  void refreshFormatSupport();

  return { load, dispose, setActive };
}
