import {
  Input,
  ALL_FORMATS,
  BlobSource,
  Output,
  Mp4OutputFormat,
  WebMOutputFormat,
  BufferTarget,
  Conversion,
  QUALITY_MEDIUM,
  type ConversionVideoOptions,
  type ConversionAudioOptions,
  type Rotation,
  type AudioCodec,
  type VideoCodec,
} from "mediabunny";
import { createImageWorkflow } from "./imageWorkflow";
import { createAudioWorkflow } from "./audioWorkflow";
import { createImageBatchWorkflow } from "./imageBatchWorkflow";
import { createVideoBatchWorkflow } from "./videoBatchWorkflow";
import { createTrimController } from "./trimController";
import {
  formatBytes,
  formatDuration,
  QUALITY_MAP,
  QUALITY_LABELS,
  QUALITY_DESC,
  QUALITY_RATE,
  QUALITY_MBPS,
  populateVideoCodecs,
} from "./shared";

/**
 * A root to query into. Both `Document` and `ShadowRoot` implement
 * `getElementById`, so the same wiring works for the standalone page and for
 * the shadow-DOM web component.
 */
export type ToolkitRoot = Document | ShadowRoot;

export interface MountToolkitOptions {
  /** Element that carries the `data-theme` attribute (html element for the
   *  standalone site, an in-shadow wrapper for the web component). */
  themeElement: HTMLElement;
}

// --- System Logging Interceptor (module singleton) ---
// The console tee is installed once globally and fans out to every mounted
// toolkit's log console. This keeps behavior sane when multiple components are
// dropped onto the same page (no repeated re-wrapping of `console`).
const logSinks: HTMLElement[] = [];
let consolePatched = false;

function stringifyArg(a: unknown): string {
  if (typeof a !== "object" || a === null) return String(a);
  try {
    return JSON.stringify(a);
  } catch {
    return String(a);
  }
}

function ensureConsolePatched() {
  if (consolePatched) return;
  consolePatched = true;

  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;

  const tee = (type: "log" | "warn" | "error", args: any[], original: (...a: any[]) => void) => {
    original.apply(console, args);
    if (logSinks.length === 0) return;

    const time = new Date().toLocaleTimeString();
    const escapedMsg = args.map(stringifyArg).join(" ").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    let color = "#a6e22e"; // green
    if (type === "warn") color = "#fd971f"; // orange
    if (type === "error") color = "#f92672"; // red

    for (const sink of logSinks) {
      sink.innerHTML += `<div style="color: ${color}">[${time}] ${escapedMsg}</div>`;
      sink.scrollTop = sink.scrollHeight;
    }
  };

  console.log = (...args: any[]) => tee("log", args, originalLog);
  console.warn = (...args: any[]) => tee("warn", args, originalWarn);
  console.error = (...args: any[]) => tee("error", args, originalError);
}

/**
 * Wire up the entire MediaBunny toolkit inside `root`. The markup (see
 * toolkitTemplate.ts) must already be present in `root` before calling this.
 */
export function mountToolkit(root: ToolkitRoot, { themeElement }: MountToolkitOptions) {
  ensureConsolePatched();

  // --- System Logging Interceptor ---
  // There is one log panel per output column (video + image). The console tee
  // fans out to every registered sink, so both panels mirror the same output.
  const logConsoles = [
    root.getElementById("log-console"),
    root.getElementById("log-console-img"),
    root.getElementById("log-console-audio"),
    root.getElementById("log-console-batch"),
    root.getElementById("log-console-vbatch"),
  ].filter((el): el is HTMLPreElement => el != null);
  logConsoles.forEach((el) => logSinks.push(el));

  const clearButtons = [
    root.getElementById("clear-console-btn"),
    root.getElementById("clear-console-btn-img"),
    root.getElementById("clear-console-btn-audio"),
    root.getElementById("clear-console-btn-batch"),
    root.getElementById("clear-console-btn-vbatch"),
  ].filter((el): el is HTMLButtonElement => el != null);
  clearButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      logConsoles.forEach((el) => {
        el.innerHTML = "System diagnostic logger cleared. Ready for next operation.";
      });
    });
  });

  // --- DOM References ---
  const themeToggle = root.getElementById("theme-toggle") as HTMLButtonElement;
  const themeIconMoon = root.getElementById("theme-icon-moon") as any;
  const themeIconSun = root.getElementById("theme-icon-sun") as any;

  const dropzone = root.getElementById("dropzone") as HTMLDivElement;
  const videoFileInput = root.getElementById("video-file-input") as HTMLInputElement;

  const loadedFileSection = root.getElementById("loaded-file-section") as HTMLElement;
  const videoWorkspace = root.getElementById("video-workspace") as HTMLElement;
  const imageWorkspace = root.getElementById("image-workspace") as HTMLElement;
  const audioWorkspace = root.getElementById("audio-workspace") as HTMLElement;
  const batchWorkspace = root.getElementById("batch-workspace") as HTMLElement;
  const videoBatchWorkspace = root.getElementById("video-batch-workspace") as HTMLElement;
  const previewVideo = root.getElementById("preview-video") as HTMLVideoElement;

  // Metadata Elements
  const metaName = root.getElementById("meta-name") as HTMLSpanElement;
  const metaSize = root.getElementById("meta-size") as HTMLSpanElement;
  const metaDuration = root.getElementById("meta-duration") as HTMLSpanElement;
  const metaResolution = root.getElementById("meta-resolution") as HTMLSpanElement;
  const metaAspect = root.getElementById("meta-aspect") as HTMLSpanElement;
  const metaVcodec = root.getElementById("meta-vcodec") as HTMLSpanElement;
  const metaFps = root.getElementById("meta-fps") as HTMLSpanElement;
  const metaAtrack = root.getElementById("meta-atrack") as HTMLSpanElement;
  const metaTags = root.getElementById("meta-tags") as HTMLPreElement;

  // Form Toggles & Groups
  const conversionForm = root.getElementById("conversion-form") as HTMLFormElement;
  const enableTrim = root.getElementById("enable-trim") as HTMLInputElement;
  const trimControlsGroup = root.getElementById("trim-controls-group") as HTMLDivElement;
  const trimStart = root.getElementById("trim-start") as HTMLInputElement;
  const trimEnd = root.getElementById("trim-end") as HTMLInputElement;
  const trimStartVal = root.getElementById("trim-start-val") as HTMLSpanElement;
  const trimEndVal = root.getElementById("trim-end-val") as HTMLSpanElement;
  const trimSelectionBar = root.getElementById("trim-selection-bar") as HTMLDivElement;

  const enableResize = root.getElementById("enable-resize") as HTMLInputElement;
  const resizeControlsGroup = root.getElementById("resize-controls-group") as HTMLDivElement;
  const resizePreset = root.getElementById("resize-preset") as HTMLSelectElement;
  const resizeWidth = root.getElementById("resize-width") as HTMLInputElement;
  const resizeHeight = root.getElementById("resize-height") as HTMLInputElement;
  const preserveAspect = root.getElementById("preserve-aspect") as HTMLInputElement;
  const resizeFit = root.getElementById("resize-fit") as HTMLSelectElement;

  // Format & Quality
  const outFormat = root.getElementById("out-format") as HTMLSelectElement;
  const outVcodec = root.getElementById("out-vcodec") as HTMLSelectElement;
  const outQuality = root.getElementById("out-quality") as HTMLInputElement;
  const outQualityVal = root.getElementById("out-quality-val") as HTMLSpanElement;
  const outQualityRate = root.getElementById("out-quality-rate") as HTMLSpanElement;
  const qualityHelp = root.getElementById("quality-help") as HTMLSpanElement;
  const fastCopyTag = root.getElementById("fast-copy-tag") as HTMLInputElement;

  // Settings panels/options hidden when Fast Copy (no re-encode) is active
  const encodingPanels = [
    "panel-crop",
    "panel-resize",
    "panel-codec",
    "panel-compression",
    "panel-rotation",
    "panel-resample",
  ].map((id) => root.getElementById(id) as HTMLElement | null);

  // Spatial crop controls + preview overlay
  const enableCropVideo = root.getElementById("enable-crop-video") as HTMLInputElement;
  const cropControlsGroup = root.getElementById("crop-controls-group") as HTMLDivElement;
  const cropX = root.getElementById("crop-x") as HTMLInputElement;
  const cropY = root.getElementById("crop-y") as HTMLInputElement;
  const cropW = root.getElementById("crop-w") as HTMLInputElement;
  const cropH = root.getElementById("crop-h") as HTMLInputElement;
  const cropFullBtn = root.getElementById("crop-full") as HTMLButtonElement;
  const cropSquareBtn = root.getElementById("crop-square") as HTMLButtonElement;
  const videoCropOverlay = root.getElementById("video-crop-overlay") as HTMLElement;
  const videoCropBox = root.getElementById("video-crop-box") as HTMLElement;
  const audioTranscodeOption = root.querySelector('label[for="audio-mode-transcode"]') as HTMLElement | null;
  const rotateCorrection = root.getElementById("rotate-correction") as HTMLSelectElement;
  const allowRotMetadata = root.getElementById("allow-rot-metadata") as HTMLInputElement;

  // Frame Rate Resampling
  const enableFps = root.getElementById("enable-fps") as HTMLInputElement;
  const fpsControlsGroup = root.getElementById("fps-controls-group") as HTMLDivElement;
  const targetFps = root.getElementById("target-fps") as HTMLSelectElement;
  const fpsMode = root.getElementById("fps-mode") as HTMLSelectElement;

  // Custom Bitrate Elements
  const useCustomBitrate = root.getElementById("use-custom-bitrate") as HTMLInputElement;
  const customBitrateGroup = root.getElementById("custom-bitrate-group") as HTMLDivElement;
  const customBitrate = root.getElementById("custom-bitrate") as HTMLInputElement;
  const customBitrateMbpsLabel = root.getElementById("custom-bitrate-mbps-label") as HTMLSpanElement;

  // Audio Handlers
  const audioModeCopy = root.getElementById("audio-mode-copy") as HTMLInputElement;
  const audioModeTranscode = root.getElementById("audio-mode-transcode") as HTMLInputElement;
  const audioModeMute = root.getElementById("audio-mode-mute") as HTMLInputElement;
  const audioTranscodeControls = root.getElementById("audio-transcode-controls") as HTMLDivElement;
  const audioCodec = root.getElementById("audio-codec") as HTMLSelectElement;
  const audioBitrate = root.getElementById("audio-bitrate") as HTMLSelectElement;
  const audioChannels = root.getElementById("audio-channels") as HTMLSelectElement;
  const audioSamplerate = root.getElementById("audio-samplerate") as HTMLSelectElement;

  // Execution elements
  const convertBtn = root.getElementById("convert-btn") as HTMLButtonElement;
  const cancelBtn = root.getElementById("cancel-btn") as HTMLButtonElement;
  const progressSection = root.getElementById("progress-section") as HTMLElement;
  const progressTitle = root.getElementById("progress-title") as HTMLSpanElement;
  const progressPercentage = root.getElementById("progress-percentage") as HTMLElement;
  const conversionProgress = root.getElementById("conversion-progress") as HTMLProgressElement;
  const progressTimeProcessed = root.getElementById("progress-time-processed") as HTMLSpanElement;
  const progressSpeed = root.getElementById("progress-speed") as HTMLSpanElement;

  // Result Block
  const resultSection = root.getElementById("result-section") as HTMLElement;
  const downloadAnchor = root.getElementById("download-anchor") as HTMLAnchorElement;
  const outputSizeTag = root.getElementById("output-size-tag") as HTMLSpanElement;
  const outputVideo = root.getElementById("output-video") as HTMLVideoElement;
  const outputPlaceholder = root.getElementById("output-placeholder") as HTMLElement;

  const imageResultSection = root.getElementById("image-result-section") as HTMLElement;

  // --- State Management ---
  let currentFile: File | null = null;
  let currentSourceInput: Input | null = null;
  let sourceVideoWidth: number = 0;
  let sourceVideoHeight: number = 0;
  let sourceVideoDuration: number = 0;
  let sourceFps: number = 0;
  let sourceHasAudio: boolean = false;
  let currentActiveConversion: Conversion | null = null;

  type MediaKind = "video" | "image" | "audio" | "batch" | "vbatch";
  let imageWorkflow: ReturnType<typeof createImageWorkflow> | null = null;
  let audioWorkflow: ReturnType<typeof createAudioWorkflow> | null = null;
  let imageBatchWorkflow: ReturnType<typeof createImageBatchWorkflow> | null = null;
  let videoBatchWorkflow: ReturnType<typeof createVideoBatchWorkflow> | null = null;

  // --- Frame Interpolation / Blending State ---
  interface InterpolationState {
    lastSample: any | null;
    nextOutputTimestamp: number;
    isFirstFrame: boolean;
    blendCanvas: HTMLCanvasElement | null;
    blendCtx: CanvasRenderingContext2D | null;
  }

  let intState: InterpolationState = {
    lastSample: null,
    nextOutputTimestamp: 0,
    isFirstFrame: true,
    blendCanvas: null,
    blendCtx: null,
  };

  function resetInterpolationState() {
    if (intState.lastSample) {
      try {
        intState.lastSample.close();
      } catch {
        // already closed
      }
    }
    intState = {
      lastSample: null,
      nextOutputTimestamp: 0,
      isFirstFrame: true,
      blendCanvas: null,
      blendCtx: null,
    };
  }

  // --- Theme Toggle Implementation ---
  function initializeTheme() {
    const savedTheme =
      localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    themeElement.setAttribute("data-theme", savedTheme);
    updateThemeIcons(savedTheme);
  }

  function updateThemeIcons(theme: string) {
    if (theme === "dark") {
      themeIconMoon.style.display = "none";
      themeIconSun.style.display = "inline-block";
    } else {
      themeIconMoon.style.display = "inline-block";
      themeIconSun.style.display = "none";
    }
  }

  themeToggle.addEventListener("click", () => {
    const currentTheme = themeElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    themeElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcons(newTheme);
  });

  initializeTheme();

  function revealLoadedSection() {
    loadedFileSection.style.display = "block";
    loadedFileSection.scrollIntoView({ behavior: "smooth" });
  }

  imageWorkflow = createImageWorkflow({
    root,
    formatBytes,
    revealLoadedSection,
  });

  audioWorkflow = createAudioWorkflow({
    root,
    formatBytes,
    revealLoadedSection,
  });

  imageBatchWorkflow = createImageBatchWorkflow({ root });
  videoBatchWorkflow = createVideoBatchWorkflow({ root });

  // --- Drag & Drop Operations ---
  dropzone.addEventListener("click", () => videoFileInput.click());

  ["dragenter", "dragover"].forEach((eventName) => {
    dropzone.addEventListener(
      eventName,
      (e) => {
        e.preventDefault();
        dropzone.classList.add("dragging");
      },
      false,
    );
  });

  ["dragleave", "drop"].forEach((eventName) => {
    dropzone.addEventListener(
      eventName,
      (e) => {
        e.preventDefault();
        dropzone.classList.remove("dragging");
      },
      false,
    );
  });

  dropzone.addEventListener("drop", (e) => {
    const files = e.dataTransfer?.files;
    if (files && files.length > 0) handleFiles(Array.from(files));
  });

  videoFileInput.addEventListener("change", () => {
    if (videoFileInput.files && videoFileInput.files.length > 0) {
      handleFiles(Array.from(videoFileInput.files));
    }
  });

  // Route one or many files. Multiple images → batch mode; otherwise load the
  // first file into its single-file workspace.
  function handleFiles(files: File[]) {
    if (files.length <= 1) {
      handleFileLoad(files[0]);
      return;
    }
    const images = files.filter((f) => detectMediaKind(f) === "image");
    const videos = files.filter((f) => detectMediaKind(f) === "video");
    const disposeSingles = () => {
      imageWorkflow?.dispose();
      audioWorkflow?.dispose();
      if (currentSourceInput) {
        currentSourceInput.dispose();
        currentSourceInput = null;
      }
    };

    if (videos.length >= 2) {
      setWorkspaceMode("vbatch");
      disposeSingles();
      videoBatchWorkflow?.start(videos);
      revealLoadedSection();
      if (videos.length < files.length) {
        console.warn(`Video batch: ${files.length - videos.length} non-video file(s) were ignored.`);
      }
    } else if (images.length >= 2) {
      setWorkspaceMode("batch");
      disposeSingles();
      imageBatchWorkflow?.start(images);
      revealLoadedSection();
      if (images.length < files.length) {
        console.warn(`Image batch: ${files.length - images.length} non-image file(s) were ignored.`);
      }
    } else {
      // Not a multi-file batch of one type — just load the first file
      handleFileLoad(files[0]);
    }
  }

  function detectMediaKind(file: File): MediaKind | null {
    if (file.type.startsWith("video/")) return "video";
    if (file.type.startsWith("image/")) return "image";
    if (file.type.startsWith("audio/")) return "audio";
    const lower = file.name.toLowerCase();
    if ([".mp4", ".mov", ".webm", ".mkv", ".avi"].some((ext) => lower.endsWith(ext))) return "video";
    if ([".jpg", ".jpeg", ".png", ".webp", ".avif", ".bmp", ".gif"].some((ext) => lower.endsWith(ext))) return "image";
    if ([".mp3", ".wav", ".m4a", ".flac", ".ogg", ".opus", ".aac", ".weba"].some((ext) => lower.endsWith(ext)))
      return "audio";
    return null;
  }

  function setWorkspaceMode(kind: MediaKind) {
    videoWorkspace.style.display = kind === "video" ? "grid" : "none";
    imageWorkspace.style.display = kind === "image" ? "grid" : "none";
    audioWorkspace.style.display = kind === "audio" ? "grid" : "none";
    batchWorkspace.style.display = kind === "batch" ? "block" : "none";
    videoBatchWorkspace.style.display = kind === "vbatch" ? "block" : "none";
    progressSection.style.display = "none";
    resultSection.style.display = "none";
    outputPlaceholder.style.display = "";
    imageResultSection.style.display = "none";
    imageWorkflow?.setActive(kind === "image");
    audioWorkflow?.setActive(kind === "audio");
    if (kind !== "batch") imageBatchWorkflow?.dispose();
    if (kind !== "vbatch") videoBatchWorkflow?.dispose();
  }

  async function handleFileLoad(file: File) {
    const kind = detectMediaKind(file);
    if (!kind) {
      alert("Unsupported file type. Please load a video, image, or audio file.");
      return;
    }
    if (currentSourceInput && kind !== "video") {
      currentSourceInput.dispose();
      currentSourceInput = null;
    }
    if (kind === "video") {
      await handleVideoLoad(file);
    } else if (kind === "image") {
      setWorkspaceMode("image");
      audioWorkflow?.dispose();
      await imageWorkflow?.load(file);
    } else {
      setWorkspaceMode("audio");
      imageWorkflow?.dispose();
      await audioWorkflow?.load(file);
    }
  }

  // --- Loaded Video Processing & Attributes Checking ---
  async function handleVideoLoad(file: File) {
    currentFile = file;
    setWorkspaceMode("video");
    console.log(`Loading video file: "${file.name}" (${formatBytes(file.size)})`);
    imageWorkflow?.dispose();
    audioWorkflow?.dispose();

    // Reset Result Section
    resultSection.style.display = "none";
    if (outputVideo.src) URL.revokeObjectURL(outputVideo.src);
    outputVideo.src = "";

    // Setup preview URL
    const fileUrl = URL.createObjectURL(file);
    previewVideo.src = fileUrl;

    // Render original static descriptors
    metaName.textContent = file.name;
    metaSize.textContent = formatBytes(file.size);

    try {
      // Instantiate MediaBunny source file input
      if (currentSourceInput) {
        currentSourceInput.dispose();
      }

      currentSourceInput = new Input({
        formats: ALL_FORMATS,
        source: new BlobSource(file),
      });

      const isReadable = await currentSourceInput.canRead();
      if (!isReadable) {
        console.warn("Input format is unrecognized by MediaBunny. Transcoding might fail depending on engine codecs.");
      }

      const format = await currentSourceInput.getFormat();
      console.log(`Detected Container Format: ${format.name} (MimeType: ${format.mimeType})`);

      // Fetch tracks information
      const videoTracks = await currentSourceInput.getVideoTracks();
      const audioTracks = await currentSourceInput.getAudioTracks();

      console.log(`Detected: ${videoTracks.length} video track(s) and ${audioTracks.length} audio track(s).`);

      // Fetch primary video track parameters
      const primaryVideo = await currentSourceInput.getPrimaryVideoTrack();
      if (primaryVideo) {
        sourceVideoWidth = await primaryVideo.getDisplayWidth();
        sourceVideoHeight = await primaryVideo.getDisplayHeight();
        const codec = await primaryVideo.getCodec();
        const codedWidth = await primaryVideo.getCodedWidth();
        const codedHeight = await primaryVideo.getCodedHeight();
        const rotation = await primaryVideo.getRotation();

        sourceVideoDuration = await currentSourceInput.computeDuration();

        metaDuration.textContent = formatDuration(sourceVideoDuration);
        metaResolution.textContent = `${sourceVideoWidth}x${sourceVideoHeight}`;
        metaAspect.textContent = `${(sourceVideoWidth / sourceVideoHeight).toFixed(2)}:1`;
        metaVcodec.textContent = String(codec).toUpperCase();

        // Retrieve packet stats for estimating native video framerate (FPS)
        try {
          // computePacketStats(300) retrieves up to 300 packets/frames to estimate FPS/bitrate quickly
          const stats = await primaryVideo.computePacketStats(300);
          if (stats && stats.averagePacketRate) {
            sourceFps = stats.averagePacketRate;
            metaFps.textContent = `${stats.averagePacketRate.toFixed(2)} fps`;
            console.log(`Computed original FPS estimate: ${stats.averagePacketRate} fps from prefix stats.`);
          } else {
            metaFps.textContent = "Unknown";
          }
        } catch (err) {
          console.warn("Could not compute primary video packet stats for FPS metadata:", err);
          metaFps.textContent = "Unknown";
        }

        sourceHasAudio = audioTracks.length > 0;
        metaAtrack.textContent = audioTracks.length > 0 ? `${audioTracks.length} track(s)` : "Muted / None";

        console.log(
          `Video details: ${codedWidth}x${codedHeight} coded dimensions, display size ${sourceVideoWidth}x${sourceVideoHeight}, natural rotation: ${rotation}°`,
        );

        // Initialize resizer defaults
        resizeWidth.value = String(sourceVideoWidth);
        resizeHeight.value = String(sourceVideoHeight);
        resizeWidth.max = String(sourceVideoWidth * 2);
        resizeHeight.max = String(sourceVideoHeight * 2);

        // Initialize trim range to the full clip
        videoTrim.setDuration(sourceVideoDuration);

        // Reset spatial crop to the full new frame
        resetVideoCropToFull();
      } else {
        console.warn("No video track detected inside this clip! Options might behave differently.");
        metaResolution.textContent = "Audio Only";
        metaAspect.textContent = "-";
        metaVcodec.textContent = "-";
      }

      // Try fetching metadata tags
      try {
        const tags = await currentSourceInput.getMetadataTags();
        const cleanTags: Record<string, any> = {};

        for (const [key, val] of Object.entries(tags)) {
          // Drop heavy binary attachments to display clean text keys
          if (val instanceof Uint8Array) {
            cleanTags[key] = `[Binary Array: ${formatBytes(val.length)}]`;
          } else if (Array.isArray(val)) {
            cleanTags[key] = `[Array of ${val.length} entries]`;
          } else {
            cleanTags[key] = val;
          }
        }

        const tagString =
          Object.keys(cleanTags).length > 0
            ? JSON.stringify(cleanTags, null, 2)
            : "No tags parsed from metadata container.";

        metaTags.textContent = tagString;
      } catch {
        metaTags.textContent = "Unabled to parse metadata block tags.";
      }

      // Reveal controls block
      revealLoadedSection();
      updateSizeEstimate();
    } catch (error: any) {
      console.error("An error occurred during video analysis profiling: ", error);
      alert(`Could not process video metadata: ${error.message || error}`);
    }
  }

  // --- Trim (dual-handle range + scrub), shared with the audio workspace ---
  const videoTrim = createTrimController({
    media: previewVideo,
    enable: enableTrim,
    controlsGroup: trimControlsGroup,
    startInput: trimStart,
    endInput: trimEnd,
    startLabel: trimStartVal,
    endLabel: trimEndVal,
    selectionBar: trimSelectionBar,
    onChange: () => updateSizeEstimate(),
  });

  // --- Custom Compression Bitrate Handlers ---
  function updateCustomBitrateUI() {
    const on = useCustomBitrate.checked;
    customBitrateGroup.style.display = on ? "block" : "none";
    // An explicit bitrate target overrides the subjective-quality slider
    outQuality.disabled = on;
    outQualityVal.style.opacity = on ? "0.4" : "";
    outQualityRate.style.opacity = on ? "0.4" : "";
  }
  useCustomBitrate.addEventListener("change", () => {
    updateCustomBitrateUI();
    updateSizeEstimate();
  });
  updateCustomBitrateUI();

  customBitrate.addEventListener("input", () => {
    const rateBps = parseInt(customBitrate.value);
    if (!isNaN(rateBps) && rateBps > 0) {
      const mbps = rateBps / 1000000;
      customBitrateMbpsLabel.textContent = `${mbps.toFixed(2)} Mbps`;
    } else {
      customBitrateMbpsLabel.textContent = "- Mbps";
    }
  });

  // --- Frame Rate Resampling Handlers ---
  enableFps.addEventListener("change", () => {
    fpsControlsGroup.style.display = enableFps.checked ? "block" : "none";
  });

  // --- Sizing Aspect Ratio Computations ---
  enableResize.addEventListener("change", () => {
    resizeControlsGroup.style.display = enableResize.checked ? "block" : "none";
  });

  function calculateAspectHeight(widthVal: number) {
    if (!sourceVideoWidth || !sourceVideoHeight) return widthVal;
    const ratio = sourceVideoWidth / sourceVideoHeight;
    return Math.round(widthVal / ratio);
  }

  function calculateAspectWidth(heightVal: number) {
    if (!sourceVideoWidth || !sourceVideoHeight) return heightVal;
    const ratio = sourceVideoWidth / sourceVideoHeight;
    return Math.round(heightVal * ratio);
  }

  resizeWidth.addEventListener("input", () => {
    if (preserveAspect.checked && resizeWidth.value) {
      const w = parseInt(resizeWidth.value);
      if (w > 0) {
        resizeHeight.value = String(calculateAspectHeight(w));
      }
    }
  });

  resizeHeight.addEventListener("input", () => {
    if (preserveAspect.checked && resizeHeight.value) {
      const h = parseInt(resizeHeight.value);
      if (h > 0) {
        resizeWidth.value = String(calculateAspectWidth(h));
      }
    }
  });

  resizePreset.addEventListener("change", () => {
    const preset = resizePreset.value;
    if (preset === "custom") {
      resizeWidth.disabled = false;
      resizeHeight.disabled = false;
      return;
    }

    // Pre-calculate based on aspect locks
    if (preset.startsWith("square")) {
      const dim = preset === "square-1080" ? 1080 : 720;
      resizeWidth.value = String(dim);
      resizeHeight.value = String(dim);
      preserveAspect.checked = false;
    } else {
      // Width-bounded preserves aspect ratio
      const targetWidth = parseInt(preset);
      resizeWidth.value = String(targetWidth);
      resizeHeight.value = String(calculateAspectHeight(targetWidth));
      preserveAspect.checked = true;
    }
  });

  preserveAspect.addEventListener("change", () => {
    if (preserveAspect.checked && resizeWidth.value) {
      const w = parseInt(resizeWidth.value);
      if (w > 0) {
        resizeHeight.value = String(calculateAspectHeight(w));
      }
    }
  });

  // --- Spatial Crop (frame region) ---
  // Crop region in source (native) pixels. Mediabunny crops after rotation and
  // before resizing (ConversionVideoOptions.crop).
  const CROP_MIN = 8;
  let videoCrop = { x: 0, y: 0, width: 0, height: 0 };
  let cropDrag: { handle: string; startX: number; startY: number; start: typeof videoCrop } | null = null;

  function clampVideoCrop(c: { x: number; y: number; width: number; height: number }) {
    const W = sourceVideoWidth;
    const H = sourceVideoHeight;
    const x = Math.max(0, Math.min(Math.round(c.x), Math.max(0, W - CROP_MIN)));
    const y = Math.max(0, Math.min(Math.round(c.y), Math.max(0, H - CROP_MIN)));
    const width = Math.max(CROP_MIN, Math.min(Math.round(c.width), W - x));
    const height = Math.max(CROP_MIN, Math.min(Math.round(c.height), H - y));
    return { x, y, width, height };
  }

  function renderCropOverlay() {
    if (!sourceVideoWidth || !sourceVideoHeight) return;
    videoCropBox.style.left = `${(videoCrop.x / sourceVideoWidth) * 100}%`;
    videoCropBox.style.top = `${(videoCrop.y / sourceVideoHeight) * 100}%`;
    videoCropBox.style.width = `${(videoCrop.width / sourceVideoWidth) * 100}%`;
    videoCropBox.style.height = `${(videoCrop.height / sourceVideoHeight) * 100}%`;
  }

  function setVideoCrop(c: { x: number; y: number; width: number; height: number }) {
    videoCrop = clampVideoCrop(c);
    cropX.value = String(videoCrop.x);
    cropY.value = String(videoCrop.y);
    cropW.value = String(videoCrop.width);
    cropH.value = String(videoCrop.height);
    renderCropOverlay();
    updateSizeEstimate();
  }

  function resetVideoCropToFull() {
    setVideoCrop({ x: 0, y: 0, width: sourceVideoWidth, height: sourceVideoHeight });
  }

  enableCropVideo.addEventListener("change", () => {
    const on = enableCropVideo.checked;
    cropControlsGroup.style.display = on ? "block" : "none";
    videoCropOverlay.style.display = on ? "block" : "none";
    if (on && (!videoCrop.width || !videoCrop.height)) resetVideoCropToFull();
    renderCropOverlay();
    updateSizeEstimate();
  });

  [cropX, cropY, cropW, cropH].forEach((el) => {
    el.addEventListener("input", () => {
      setVideoCrop({
        x: parseInt(cropX.value) || 0,
        y: parseInt(cropY.value) || 0,
        width: parseInt(cropW.value) || CROP_MIN,
        height: parseInt(cropH.value) || CROP_MIN,
      });
    });
  });

  cropFullBtn.addEventListener("click", () => resetVideoCropToFull());
  cropSquareBtn.addEventListener("click", () => {
    const size = Math.min(sourceVideoWidth, sourceVideoHeight);
    setVideoCrop({
      x: Math.floor((sourceVideoWidth - size) / 2),
      y: Math.floor((sourceVideoHeight - size) / 2),
      width: size,
      height: size,
    });
  });

  videoCropBox.addEventListener("pointerdown", (e) => {
    if (!sourceVideoWidth) return;
    const handle = (e.target as HTMLElement).dataset?.handle || "move";
    cropDrag = { handle, startX: e.clientX, startY: e.clientY, start: { ...videoCrop } };
    e.preventDefault();
    e.stopPropagation();
  });

  window.addEventListener("pointermove", (e) => {
    if (!cropDrag) return;
    const rect = previewVideo.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    // Convert pointer delta from display pixels to native source pixels
    const dx = ((e.clientX - cropDrag.startX) / rect.width) * sourceVideoWidth;
    const dy = ((e.clientY - cropDrag.startY) / rect.height) * sourceVideoHeight;
    const s = cropDrag.start;

    if (cropDrag.handle === "move") {
      setVideoCrop({
        x: Math.max(0, Math.min(s.x + dx, sourceVideoWidth - s.width)),
        y: Math.max(0, Math.min(s.y + dy, sourceVideoHeight - s.height)),
        width: s.width,
        height: s.height,
      });
      return;
    }

    let x = s.x;
    let y = s.y;
    let width = s.width;
    let height = s.height;
    const right = s.x + s.width;
    const bottom = s.y + s.height;
    const h = cropDrag.handle;
    if (h === "nw" || h === "sw") {
      x = Math.min(s.x + dx, right - CROP_MIN);
      width = right - x;
    }
    if (h === "ne" || h === "se") {
      width = Math.max(CROP_MIN, s.width + dx);
    }
    if (h === "nw" || h === "ne") {
      y = Math.min(s.y + dy, bottom - CROP_MIN);
      height = bottom - y;
    }
    if (h === "sw" || h === "se") {
      height = Math.max(CROP_MIN, s.height + dy);
    }
    setVideoCrop({ x, y, width, height });
  });

  window.addEventListener("pointerup", () => {
    cropDrag = null;
  });

  // --- Output Format Codec Alignment ---
  outFormat.addEventListener("change", () => {
    populateVideoCodecs(outVcodec, outFormat.value);
  });

  // Compression slider value descriptor text + estimated bitrate
  function updateQualityLabels() {
    const val = parseInt(outQuality.value);
    outQualityVal.textContent = QUALITY_LABELS[val] || "Medium";
    if (outQualityRate) outQualityRate.textContent = QUALITY_RATE[val] || "";
    qualityHelp.textContent = QUALITY_DESC[val] || "";
  }
  outQuality.addEventListener("input", updateQualityLabels);
  updateQualityLabels();

  // --- Estimated output size ---
  // Rough estimate: (video + audio) bitrate × duration. Quality presets are
  // 1080p30 references scaled by the effective pixel count and frame rate, so
  // resize and frame-rate resampling move the number too. Trimming shortens the
  // duration. Explicit bitrate overrides use the entered value directly.
  const sizeEstimateEl = root.getElementById("size-estimate") as HTMLElement | null;

  function updateSizeEstimate() {
    if (!sizeEstimateEl) return;

    if (fastCopyTag.checked) {
      sizeEstimateEl.textContent = "≈ source size (stream copy, no re-encode)";
      return;
    }
    if (!sourceVideoDuration) {
      sizeEstimateEl.textContent = "—";
      return;
    }

    // Duration (trim-aware)
    let duration = sourceVideoDuration;
    if (enableTrim.checked) {
      const s = parseFloat(trimStart.value);
      const e = parseFloat(trimEnd.value);
      if (!isNaN(s) && !isNaN(e) && e > s) duration = e - s;
    }

    // Effective dimensions: crop sets the frame size, resize (if on) overrides
    // the final output size; frame rate handled below.
    let w = sourceVideoWidth;
    let h = sourceVideoHeight;
    if (enableCropVideo.checked && videoCrop.width && videoCrop.height) {
      w = videoCrop.width;
      h = videoCrop.height;
    }
    if (enableResize.checked) {
      const rw = parseInt(resizeWidth.value);
      const rh = parseInt(resizeHeight.value);
      if (rw > 0) w = rw;
      if (rh > 0) h = rh;
    }
    let fps = sourceFps || 30;
    if (enableFps.checked) {
      const tf = parseInt(targetFps.value);
      if (tf > 0) fps = tf;
    }

    // Video bitrate (bps)
    let videoBps: number;
    if (useCustomBitrate.checked) {
      videoBps = parseInt(customBitrate.value) || 0;
    } else {
      const baseMbps = QUALITY_MBPS[parseInt(outQuality.value)] ?? 3.5;
      const pixelFactor = w && h ? (w * h) / (1920 * 1080) : 1;
      const fpsFactor = fps / 30;
      videoBps = baseMbps * 1_000_000 * pixelFactor * fpsFactor;
    }

    // Audio bitrate (bps)
    let audioBps = 0;
    if (audioModeTranscode.checked) audioBps = parseInt(audioBitrate.value) || 0;
    else if (audioModeCopy.checked && sourceHasAudio) audioBps = 128_000; // copy: assume ~128 kbps

    const bytes = ((videoBps + audioBps) * duration) / 8;
    sizeEstimateEl.textContent = "≈ " + formatBytes(bytes);
  }

  // Any control change in the form re-estimates (all inputs live inside it).
  conversionForm.addEventListener("input", updateSizeEstimate);
  conversionForm.addEventListener("change", updateSizeEstimate);

  // Fast Copy (no re-encode) hides the resize / encoding panels, since those
  // can't apply to a stream copy. Audio stays available for keep/drop, but the
  // Transcode option is hidden (transcoding audio would re-encode it).
  function updateProcessingModeUI() {
    const on = fastCopyTag.checked;
    encodingPanels.forEach((p) => {
      if (p) p.style.display = on ? "none" : "";
    });

    if (audioTranscodeOption) audioTranscodeOption.style.display = on ? "none" : "";
    if (on && audioModeTranscode.checked) {
      audioModeCopy.checked = true;
      audioTranscodeControls.style.display = "none";
    }
  }
  fastCopyTag.addEventListener("change", updateProcessingModeUI);
  updateProcessingModeUI();

  // Audio panel radio toggle triggers
  audioModeCopy.addEventListener("change", () => (audioTranscodeControls.style.display = "none"));
  audioModeMute.addEventListener("change", () => (audioTranscodeControls.style.display = "none"));
  audioModeTranscode.addEventListener("change", () => (audioTranscodeControls.style.display = "block"));

  // --- Video Transcoding Core Execution ---
  conversionForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!currentFile || !currentSourceInput) {
      alert("Please load a source media file before executing transcription.");
      return;
    }

    // Reset custom interpolation state variables
    resetInterpolationState();

    // Visual UI states shifts
    convertBtn.style.display = "none";
    cancelBtn.style.display = "inline-block";
    progressSection.style.display = "block";
    resultSection.style.display = "none";
    outputPlaceholder.style.display = "none";

    // Progress presets initialization
    progressTitle.textContent = "🐰 Initializing conversion pipeline...";
    progressPercentage.textContent = "0%";
    conversionProgress.value = 0;
    progressTimeProcessed.textContent = "Processed Time: 0s / 0s";

    const startTime = performance.now();

    try {
      // 1. Prepare target containers and formats
      const isMp4 = outFormat.value === "mp4";
      const outputFormat = isMp4 ? new Mp4OutputFormat() : new WebMOutputFormat();
      const outputTarget = new BufferTarget();

      const output = new Output({
        format: outputFormat,
        target: outputTarget,
      });

      // 2. Setup Video Settings
      const videoConfig: ConversionVideoOptions = {};
      const wantsFastCopy = fastCopyTag.checked;

      if (wantsFastCopy) {
        console.log("⚡ Fast Copy trim mode enabled. Omitting size / quality alterations.");
        videoConfig.forceTranscode = false;
      } else {
        // General Transcoding path parameters matching
        videoConfig.forceTranscode = true;
        videoConfig.codec = outVcodec.value as VideoCodec;

        if (useCustomBitrate.checked) {
          const rateBps = parseInt(customBitrate.value);
          if (!isNaN(rateBps) && rateBps > 1000) {
            videoConfig.bitrate = rateBps;
            console.log(`Using custom target video bitrate: ${(rateBps / 1000000).toFixed(2)} Mbps (${rateBps} bps)`);
          } else {
            videoConfig.bitrate = QUALITY_MEDIUM;
            console.log("Custom bitrate was invalid. Defaulting to Medium Preset Quality.");
          }
        } else {
          const qualLevel = parseInt(outQuality.value);
          videoConfig.bitrate = QUALITY_MAP[qualLevel] || QUALITY_MEDIUM;
          console.log(`Using video quality preset level: ${qualLevel} (${QUALITY_LABELS[qualLevel] || "Medium"})`);
        }

        if (enableCropVideo.checked) {
          videoConfig.crop = {
            left: videoCrop.x,
            top: videoCrop.y,
            width: videoCrop.width,
            height: videoCrop.height,
          };
          console.log(
            `Cropping frame to ${videoCrop.width}x${videoCrop.height} at (${videoCrop.x}, ${videoCrop.y}).`,
          );
        }

        if (enableResize.checked) {
          if (resizeWidth.value) videoConfig.width = parseInt(resizeWidth.value);
          if (resizeHeight.value) videoConfig.height = parseInt(resizeHeight.value);
          videoConfig.fit = resizeFit.value as "fill" | "contain" | "cover";
          console.log(`Setting resize dimensions: ${videoConfig.width}x${videoConfig.height} (${videoConfig.fit})`);
        }

        // Handle custom target frame rate and resampling mode
        if (enableFps.checked) {
          const fpsVal = parseInt(targetFps.value);
          if (!isNaN(fpsVal) && fpsVal > 0) {
            const mode = fpsMode.value;
            if (mode === "blend") {
              // Bidirectional blending mode is handled by a custom 'process' hook
              // Note: Since we manipulate the frame list and timestamps manually, we do NOT set 'videoConfig.frameRate'.
              // Setting 'videoConfig.frameRate' triggers MediaBunny's interior frame repeater.
              const frameInterval = 1 / fpsVal;
              console.log(`Setting up hardware-accelerated Bidirectional Frame Blending at ${fpsVal} FPS.`);

              videoConfig.process = async (sample: any) => {
                const width = sample.codedWidth;
                const height = sample.codedHeight;

                if (intState.isFirstFrame) {
                  intState.isFirstFrame = false;
                  intState.nextOutputTimestamp = sample.timestamp;
                  intState.lastSample = sample.clone();

                  intState.blendCanvas = document.createElement("canvas");
                  intState.blendCanvas.width = width;
                  intState.blendCanvas.height = height;
                  intState.blendCtx = intState.blendCanvas.getContext("2d")!;

                  // Emit precise first frame clone mapped to the target timeline
                  const firstOut = sample.clone();
                  firstOut.setTimestamp(intState.nextOutputTimestamp);
                  firstOut.setDuration(frameInterval);
                  intState.nextOutputTimestamp += frameInterval;
                  return [firstOut];
                }

                const F_t = intState.lastSample!;
                const F_tPlus1 = sample;

                const T_t = F_t.timestamp;
                const T_tPlus1 = F_tPlus1.timestamp;
                const stepDuration = T_tPlus1 - T_t;

                const results: any[] = [];

                // Generate blended frames covering the step interval [T_t, T_tPlus1]
                while (intState.nextOutputTimestamp <= T_tPlus1) {
                  const t_out = intState.nextOutputTimestamp;

                  // Interpolation weight: ratio of current out-timestamp inside the step
                  let w = 0;
                  if (stepDuration > 0) {
                    w = (t_out - T_t) / stepDuration;
                  }
                  w = Math.max(0, Math.min(1, w)); // Clamp to [0, 1] bounds

                  // Apply S-Curve (Smoothstep) to sharpen intermediate frames and reduce ghosting/blur
                  const wEased = w * w * (3 - 2 * w);

                  const canvas = intState.blendCanvas!;
                  const ctx = intState.blendCtx!;
                  ctx.clearRect(0, 0, width, height);

                  // Extract underlying WebCodecs VideoFrame resources
                  const frameT = F_t.toVideoFrame();
                  const frameTPlus1 = F_tPlus1.toVideoFrame();

                  // Canvas composite ops: Blend F_t and F_tPlus1 correctly using standard opaque blending.
                  // In 2D Canvas context, drawing with alpha < 1 over a transparent or cleared black background
                  // results in a translucent, semi-transparent frame, causing severe flickering/darkness.
                  // To fix this, we first draw F_t fully opaque, and then paint F_tPlus1 over it with opacity "wEased".
                  ctx.globalAlpha = 1.0;
                  ctx.drawImage(frameT, 0, 0, width, height);

                  ctx.globalAlpha = wEased;
                  ctx.drawImage(frameTPlus1, 0, 0, width, height);

                  // Close frames immediately to protect browser thread from heavy texture leaking
                  frameT.close();
                  frameTPlus1.close();

                  // Build the interpolated VideoSample directly from the compiled canvas
                  // MediaBunny will inspect the canvas and turn it into a VideoFrame automatically.
                  const blendedSample = new (sample.constructor as any)(canvas, {
                    timestamp: t_out,
                    duration: frameInterval,
                  });

                  results.push(blendedSample);
                  intState.nextOutputTimestamp += frameInterval;
                }

                // Cycle references
                F_t.close();
                intState.lastSample = F_tPlus1.clone();

                return results;
              };
            } else {
              // Default Frame duplication mode
              videoConfig.frameRate = fpsVal;
              console.log(`Setting output target frame rate: ${fpsVal} FPS (continuous repeating mode).`);
            }
          }
        }
      }

      // Handle rotation degrees
      const rVal = parseInt(rotateCorrection.value) as Rotation;
      if (rVal !== 0) {
        videoConfig.rotate = rVal;
        videoConfig.forceTranscode = true; // Rotations require frame-by-frame renders
        console.log(`Applying manual rotation adjustment: ${rVal}° CW.`);
      }

      videoConfig.allowRotationMetadata = allowRotMetadata.checked;

      // 3. Setup Audio Settings
      const audioConfig: ConversionAudioOptions = {};

      if (audioModeMute.checked) {
        console.log("🔇 Mutex setting: Stripping entire audio stream from output.");
        audioConfig.discard = true;
      } else if (audioModeCopy.checked) {
        console.log("⚡ Audio block: Direct pass-through copy selected.");
        audioConfig.forceTranscode = false;
      } else if (audioModeTranscode.checked) {
        audioConfig.forceTranscode = true;
        audioConfig.codec = audioCodec.value as AudioCodec;
        audioConfig.bitrate = parseInt(audioBitrate.value);

        const chan = parseInt(audioChannels.value);
        if (chan > 0) audioConfig.numberOfChannels = chan;

        const rate = parseInt(audioSamplerate.value);
        if (rate > 0) audioConfig.sampleRate = rate;

        console.log(
          `Transcoding Audio Stream: ${audioConfig.codec} at ${parseInt(audioBitrate.value) / 1000}kbps, SampleRate: ${rate || "Original"}, Channels: ${chan || "Original"}`,
        );
      }

      // 4. Construct boundaries for Trimming Options
      const trimConfig: { start?: number; end?: number } = {};
      if (enableTrim.checked) {
        trimConfig.start = parseFloat(trimStart.value);
        trimConfig.end = parseFloat(trimEnd.value);
        console.log(
          `Clip window enabled: ${trimConfig.start}s to ${trimConfig.end}s (Trim duration: ${(trimConfig.end - trimConfig.start).toFixed(2)}s)`,
        );
      }

      // Initialize the Conversion engine thread
      currentActiveConversion = await Conversion.init({
        input: currentSourceInput,
        output,
        video: videoConfig,
        audio: audioConfig,
        trim: enableTrim.checked ? trimConfig : undefined,
      });

      if (!currentActiveConversion.isValid) {
        console.error("Transcode pipeline validation failed!");
        const discarded = currentActiveConversion.discardedTracks;
        discarded.forEach((track) => {
          console.warn(`Track ${track.track.id} discarded. Reason: ${track.reason}`);
        });
        throw new Error(`Chosen tracks make for an invalid or unsupported file conversion combination.`);
      }

      // Calculate maximum target duration to display progress properly
      const totalToProcess = enableTrim.checked ? trimConfig.end! - trimConfig.start! : sourceVideoDuration;

      // Progress updates mapping
      currentActiveConversion.onProgress = (progress, processedTime) => {
        const pct = Math.min(100, Math.round(progress * 100));
        progressPercentage.textContent = `${pct}%`;
        conversionProgress.value = pct;
        progressTitle.textContent = `🐰 Transcoding active clip frames (${pct}%)`;

        progressTimeProcessed.textContent = `Processed Time: ${processedTime.toFixed(1)}s / ${totalToProcess.toFixed(1)}s`;

        const curTime = performance.now();
        const elapsedSec = (curTime - startTime) / 1000;
        if (processedTime > 0) {
          const speedMultiplier = processedTime / elapsedSec;
          progressSpeed.textContent = `Processing speed: ${speedMultiplier.toFixed(2)}x real-time`;
        }
      };

      console.log("🚀 Launching conversion backend. Please wait...");
      await currentActiveConversion.execute();

      // 5. Package output buffer and reveal details
      const finalBuffer = outputTarget.buffer;
      if (!finalBuffer) {
        throw new Error("Conversion processed but target buffer remains empty!");
      }

      const mime = isMp4 ? "video/mp4" : "video/webm";
      const ext = isMp4 ? "mp4" : "webm";

      const outputBlob = new Blob([finalBuffer], { type: mime });
      const outputUrl = URL.createObjectURL(outputBlob);

      // Setup Download anchor elements
      downloadAnchor.href = outputUrl;
      const dotIndex = currentFile.name.lastIndexOf(".");
      const baseName = dotIndex > 0 ? currentFile.name.slice(0, dotIndex) : currentFile.name;
      downloadAnchor.download = `${baseName}_web_export.${ext}`;
      outputSizeTag.textContent = `Size: ${formatBytes(outputBlob.size)}`;

      // Set inline output compare sources
      outputVideo.src = outputUrl;

      console.log(`🎉 Transcoding successfully finished! Outfile Size: ${formatBytes(outputBlob.size)}.`);

      // Smooth transitions
      resultSection.style.display = "block";
      resultSection.scrollIntoView({ behavior: "smooth" });
    } catch (error: any) {
      if (error.name === "ConversionCanceledError" || error.message?.includes("canceled")) {
        console.warn("Transcoding canceled by the operator.");
      } else {
        console.error("Transcoder failure: ", error);
        alert(`Conversion failure: ${error.message || error}`);
      }
    } finally {
      // Clear custom interpolation state reference buffers to avoid memory leaks
      resetInterpolationState();

      // Reset visual layouts back
      convertBtn.style.display = "inline-block";
      cancelBtn.style.display = "none";
      progressSection.style.display = "none";
      // Restore the placeholder if no result was produced (cancel/error)
      if (resultSection.style.display === "none") outputPlaceholder.style.display = "";
      currentActiveConversion = null;
    }
  });

  // Cancellation hookup
  cancelBtn.addEventListener("click", async () => {
    if (currentActiveConversion) {
      console.log("Requesting cancellation of active codec processors...");
      await currentActiveConversion.cancel();
    }
  });
}
