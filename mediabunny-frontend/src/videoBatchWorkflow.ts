// Batch video processing: shared codec/quality/resize/audio settings applied to
// many videos via sequential mediabunny conversions (with per-file progress).
// Queue, thumbnails, and ZIP "Download all" come from the generic batch engine.
import {
  Input,
  ALL_FORMATS,
  BlobSource,
  Output,
  BufferTarget,
  Conversion,
  type ConversionVideoOptions,
  type ConversionAudioOptions,
  type VideoCodec,
} from "mediabunny";
import { createBatchEngine } from "./batchShared";
import { QUALITY_MAP, QUALITY_LABELS, QUALITY_RATE, populateVideoCodecs, videoOutputSpec } from "./shared";

type CreateVideoBatchOptions = {
  root: Document | ShadowRoot;
};

/** First-frame thumbnail as a data URL (no revoke needed), or null on failure. */
function makeVideoThumb(file: File): Promise<string | null> {
  return new Promise((resolve) => {
    const v = document.createElement("video");
    v.muted = true;
    v.preload = "metadata";
    (v as any).playsInline = true;
    const url = URL.createObjectURL(file);
    let done = false;
    const finish = (r: string | null) => {
      if (done) return;
      done = true;
      URL.revokeObjectURL(url);
      resolve(r);
    };
    v.addEventListener("loadeddata", () => {
      try {
        v.currentTime = Math.min(0.1, (v.duration || 1) * 0.1);
      } catch {
        finish(null);
      }
    });
    v.addEventListener("seeked", () => {
      try {
        const scale = Math.min(1, 160 / Math.max(v.videoWidth || 160, 1));
        const c = document.createElement("canvas");
        c.width = Math.max(1, Math.round((v.videoWidth || 160) * scale));
        c.height = Math.max(1, Math.round((v.videoHeight || 90) * scale));
        c.getContext("2d")!.drawImage(v, 0, 0, c.width, c.height);
        finish(c.toDataURL("image/jpeg", 0.6));
      } catch {
        finish(null);
      }
    });
    v.addEventListener("error", () => finish(null));
    setTimeout(() => finish(null), 5000);
    v.src = url;
  });
}

export function createVideoBatchWorkflow({ root }: CreateVideoBatchOptions) {
  const g = <T extends HTMLElement>(id: string) => root.getElementById(id) as T;

  const outFormat = g<HTMLSelectElement>("vbatch-out-format");
  const outCodec = g<HTMLSelectElement>("vbatch-out-codec");
  const quality = g<HTMLInputElement>("vbatch-quality");
  const qualityVal = g<HTMLElement>("vbatch-quality-val");
  const qualityRate = g<HTMLElement>("vbatch-quality-rate");
  const mute = g<HTMLInputElement>("vbatch-mute");
  const enableResize = g<HTMLInputElement>("vbatch-enable-resize");
  const resizeControls = g<HTMLDivElement>("vbatch-resize-controls");
  const maxdimPreset = g<HTMLSelectElement>("vbatch-maxdim-preset");
  const maxdim = g<HTMLInputElement>("vbatch-maxdim");

  function updateQualityUI() {
    const q = parseInt(quality.value);
    qualityVal.textContent = QUALITY_LABELS[q] || "Medium";
    qualityRate.textContent = QUALITY_RATE[q] || "";
  }

  function activeMaxDim(): number | null {
    if (!enableResize.checked) return null;
    const m = parseInt(maxdim.value);
    return !Number.isNaN(m) && m > 0 ? m : null;
  }

  /** Downscale-only target dims (even for 4:2:0), or null if no resize needed. */
  function targetDims(sw: number, sh: number): { w: number; h: number } | null {
    const maxDim = activeMaxDim();
    if (!maxDim || !sw || !sh) return null;
    const longest = Math.max(sw, sh);
    if (longest <= maxDim) return null;
    const f = maxDim / longest;
    const w = Math.max(2, Math.round(sw * f) & ~1);
    const h = Math.max(2, Math.round(sh * f) & ~1);
    return { w, h };
  }

  // Settings wiring
  outFormat.addEventListener("change", () => populateVideoCodecs(outCodec, outFormat.value));
  quality.addEventListener("input", updateQualityUI);
  enableResize.addEventListener("change", () => {
    resizeControls.style.display = enableResize.checked ? "block" : "none";
  });
  maxdimPreset.addEventListener("change", () => {
    if (maxdimPreset.value) maxdim.value = maxdimPreset.value;
  });
  maxdim.addEventListener("input", () => {
    if (maxdim.value !== maxdimPreset.value) maxdimPreset.value = "";
  });
  updateQualityUI();

  const engine = createBatchEngine({
    elements: {
      thumbs: g("vbatch-thumbs"),
      inputCount: g("vbatch-input-count"),
      totalSize: g("vbatch-total-size"),
      queue: g("vbatch-queue"),
      count: g("vbatch-count"),
      processBtn: g<HTMLButtonElement>("vbatch-process-btn"),
      downloadAll: g<HTMLButtonElement>("vbatch-download-all"),
    },
    zipName: "media-converter-videos.zip",
    processButtonLabel: (n) => `🎬 Process All Videos (${n})`,
    makeThumb: makeVideoThumb,
    process: async (file, onProgress) => {
      const input = new Input({ formats: ALL_FORMATS, source: new BlobSource(file) });
      try {
        const track = await input.getPrimaryVideoTrack();
        const sw = track ? await track.getDisplayWidth() : 0;
        const sh = track ? await track.getDisplayHeight() : 0;

        const spec = videoOutputSpec(outFormat.value);
        const output = new Output({ format: spec.format, target: new BufferTarget() });

        const video: ConversionVideoOptions = {
          forceTranscode: true,
          codec: outCodec.value as VideoCodec,
          bitrate: QUALITY_MAP[parseInt(quality.value)] || QUALITY_MAP[3],
        };
        const dims = targetDims(sw, sh);
        if (dims) {
          video.width = dims.w;
          video.height = dims.h;
          video.fit = "contain";
        }

        const audio: ConversionAudioOptions = mute.checked ? { discard: true } : { forceTranscode: false };

        const conversion = await Conversion.init({ input, output, video, audio });
        if (!conversion.isValid) {
          conversion.discardedTracks.forEach((t) => console.warn(`Track discarded: ${t.reason}`));
          throw new Error("Unsupported codec/format combination for this file.");
        }
        conversion.onProgress = (p) => onProgress(p);
        await conversion.execute();

        const buffer = (output.target as BufferTarget).buffer;
        if (!buffer) throw new Error("Conversion produced an empty buffer.");
        const blob = new Blob([buffer], { type: spec.mime });

        const dot = file.name.lastIndexOf(".");
        const base = dot > 0 ? file.name.slice(0, dot) : file.name;
        const longestOut = dims ? Math.max(dims.w, dims.h) : Math.max(sw, sh);
        const suffix = activeMaxDim() && longestOut ? `_${longestOut}px` : "_web_export";
        return { blob, outName: `${base}${suffix}.${spec.ext}` };
      } finally {
        input.dispose();
      }
    },
  });

  return { start: engine.start, dispose: engine.dispose, setActive: engine.setActive };
}
