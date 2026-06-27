import {
  Input,
  ALL_FORMATS,
  BlobSource,
  Output,
  Mp4OutputFormat,
  WebMOutputFormat,
  BufferTarget,
  Conversion,
  QUALITY_VERY_LOW,
  QUALITY_LOW,
  QUALITY_MEDIUM,
  QUALITY_HIGH,
  QUALITY_VERY_HIGH,
  type ConversionVideoOptions,
  type ConversionAudioOptions,
  type Rotation,
  type AudioCodec,
  type VideoCodec,
} from "mediabunny";
import { createImageWorkflow } from "./imageWorkflow";

// --- System Logging Interceptor ---
const logConsole = document.getElementById("log-console") as HTMLPreElement;
const originalLog = console.log;
const originalWarn = console.warn;
const originalError = console.error;

function appendToUILog(msg: string, type: "log" | "warn" | "error" = "log") {
  if (!logConsole) return;
  const time = new Date().toLocaleTimeString();
  const escapedMsg = msg.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  let color = "#a6e22e"; // green
  if (type === "warn") color = "#fd971f"; // orange
  if (type === "error") color = "#f92672"; // red

  logConsole.innerHTML += `<div style="color: ${color}">[${time}] ${escapedMsg}</div>`;
  // Scroll to bottom
  logConsole.scrollTop = logConsole.scrollHeight;
}

// Redirect client logging to the in-UI diagnostics box
console.log = (...args: any[]) => {
  originalLog.apply(console, args);
  appendToUILog(args.map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a))).join(" "), "log");
};
console.warn = (...args: any[]) => {
  originalWarn.apply(console, args);
  appendToUILog(args.map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a))).join(" "), "warn");
};
console.error = (...args: any[]) => {
  originalError.apply(console, args);
  appendToUILog(args.map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a))).join(" "), "error");
};

const clearConsoleBtn = document.getElementById("clear-console-btn") as HTMLButtonElement;
if (clearConsoleBtn) {
  clearConsoleBtn.addEventListener("click", () => {
    logConsole.innerHTML = "System diagnostic logger cleared. Ready for next operation.";
  });
}

// --- DOM References ---
const htmlEl = document.documentElement;
const themeToggle = document.getElementById("theme-toggle") as HTMLButtonElement;
const themeIconMoon = document.getElementById("theme-icon-moon") as any;
const themeIconSun = document.getElementById("theme-icon-sun") as any;

const dropzone = document.getElementById("dropzone") as HTMLDivElement;
const videoFileInput = document.getElementById("video-file-input") as HTMLInputElement;

const loadedFileSection = document.getElementById("loaded-file-section") as HTMLElement;
const videoWorkspace = document.getElementById("video-workspace") as HTMLElement;
const imageWorkspace = document.getElementById("image-workspace") as HTMLElement;
const previewVideo = document.getElementById("preview-video") as HTMLVideoElement;

// Metadata Elements
const metaName = document.getElementById("meta-name") as HTMLSpanElement;
const metaSize = document.getElementById("meta-size") as HTMLSpanElement;
const metaDuration = document.getElementById("meta-duration") as HTMLSpanElement;
const metaResolution = document.getElementById("meta-resolution") as HTMLSpanElement;
const metaAspect = document.getElementById("meta-aspect") as HTMLSpanElement;
const metaVcodec = document.getElementById("meta-vcodec") as HTMLSpanElement;
const metaFps = document.getElementById("meta-fps") as HTMLSpanElement;
const metaAtrack = document.getElementById("meta-atrack") as HTMLSpanElement;
const metaTags = document.getElementById("meta-tags") as HTMLPreElement;

// Form Toggles & Groups
const conversionForm = document.getElementById("conversion-form") as HTMLFormElement;
const enableTrim = document.getElementById("enable-trim") as HTMLInputElement;
const trimControlsGroup = document.getElementById("trim-controls-group") as HTMLDivElement;
const trimStart = document.getElementById("trim-start") as HTMLInputElement;
const trimEnd = document.getElementById("trim-end") as HTMLInputElement;
const trimStartVal = document.getElementById("trim-start-val") as HTMLSpanElement;
const trimEndVal = document.getElementById("trim-end-val") as HTMLSpanElement;
const trimSelectionBar = document.getElementById("trim-selection-bar") as HTMLDivElement;

const enableResize = document.getElementById("enable-resize") as HTMLInputElement;
const resizeControlsGroup = document.getElementById("resize-controls-group") as HTMLDivElement;
const resizePreset = document.getElementById("resize-preset") as HTMLSelectElement;
const resizeWidth = document.getElementById("resize-width") as HTMLInputElement;
const resizeHeight = document.getElementById("resize-height") as HTMLInputElement;
const preserveAspect = document.getElementById("preserve-aspect") as HTMLInputElement;
const resizeFit = document.getElementById("resize-fit") as HTMLSelectElement;

// Format & Quality
const outFormat = document.getElementById("out-format") as HTMLSelectElement;
const outVcodec = document.getElementById("out-vcodec") as HTMLSelectElement;
const outQuality = document.getElementById("out-quality") as HTMLInputElement;
const outQualityVal = document.getElementById("out-quality-val") as HTMLSpanElement;
const qualityHelp = document.getElementById("quality-help") as HTMLSpanElement;
const fastCopyTag = document.getElementById("fast-copy-tag") as HTMLInputElement;
const rotateCorrection = document.getElementById("rotate-correction") as HTMLSelectElement;
const allowRotMetadata = document.getElementById("allow-rot-metadata") as HTMLInputElement;

// Frame Rate Resampling
const enableFps = document.getElementById("enable-fps") as HTMLInputElement;
const fpsControlsGroup = document.getElementById("fps-controls-group") as HTMLDivElement;
const targetFps = document.getElementById("target-fps") as HTMLSelectElement;
const fpsMode = document.getElementById("fps-mode") as HTMLSelectElement;

// Custom Bitrate Elements
const useCustomBitrate = document.getElementById("use-custom-bitrate") as HTMLInputElement;
const customBitrateGroup = document.getElementById("custom-bitrate-group") as HTMLDivElement;
const customBitrate = document.getElementById("custom-bitrate") as HTMLInputElement;
const customBitrateMbpsLabel = document.getElementById("custom-bitrate-mbps-label") as HTMLSpanElement;

// Audio Handlers
const audioModeCopy = document.getElementById("audio-mode-copy") as HTMLInputElement;
const audioModeTranscode = document.getElementById("audio-mode-transcode") as HTMLInputElement;
const audioModeMute = document.getElementById("audio-mode-mute") as HTMLInputElement;
const audioTranscodeControls = document.getElementById("audio-transcode-controls") as HTMLDivElement;
const audioCodec = document.getElementById("audio-codec") as HTMLSelectElement;
const audioBitrate = document.getElementById("audio-bitrate") as HTMLSelectElement;
const audioChannels = document.getElementById("audio-channels") as HTMLSelectElement;
const audioSamplerate = document.getElementById("audio-samplerate") as HTMLSelectElement;

// Execution elements
const convertBtn = document.getElementById("convert-btn") as HTMLButtonElement;
const cancelBtn = document.getElementById("cancel-btn") as HTMLButtonElement;
const progressSection = document.getElementById("progress-section") as HTMLElement;
const progressTitle = document.getElementById("progress-title") as HTMLSpanElement;
const progressPercentage = document.getElementById("progress-percentage") as HTMLElement;
const conversionProgress = document.getElementById("conversion-progress") as HTMLProgressElement;
const progressTimeProcessed = document.getElementById("progress-time-processed") as HTMLSpanElement;
const progressSpeed = document.getElementById("progress-speed") as HTMLSpanElement;

// Result Block
const resultSection = document.getElementById("result-section") as HTMLElement;
const downloadAnchor = document.getElementById("download-anchor") as HTMLAnchorElement;
const outputSizeTag = document.getElementById("output-size-tag") as HTMLSpanElement;
const originalCompareVideo = document.getElementById("original-compare-video") as HTMLVideoElement;
const outputVideo = document.getElementById("output-video") as HTMLVideoElement;

const imageResultSection = document.getElementById("image-result-section") as HTMLElement;

// --- State Management ---
let currentFile: File | null = null;
let currentSourceInput: Input | null = null;
let sourceVideoWidth: number = 0;
let sourceVideoHeight: number = 0;
let sourceVideoDuration: number = 0;
let currentActiveConversion: Conversion | null = null;
let isDraggingTrim = false;

type MediaKind = "video" | "image";
let imageWorkflow: ReturnType<typeof createImageWorkflow> | null = null;

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

const QUALITY_MAP: Record<number, typeof QUALITY_MEDIUM> = {
  1: QUALITY_VERY_LOW,
  2: QUALITY_LOW,
  3: QUALITY_MEDIUM,
  4: QUALITY_HIGH,
  5: QUALITY_VERY_HIGH,
};

const QUALITY_LABELS: Record<number, string> = {
  1: "Very Low (Max Speed / Tiny Size)",
  2: "Low",
  3: "Medium (Balanced)",
  4: "High",
  5: "Very High (Maximum Quality / Larger Size)",
};

const QUALITY_DESC: Record<number, string> = {
  1: "Prioritizes hyper-compression over quality. Ideal for lightweight previews.",
  2: "Aggressive compression. Noticeable reduction in metadata and detail.",
  3: "Balanced bitrate and visual fidelity for typical social/web sharing.",
  4: "Excellent visual density. Great for standard professional distribution.",
  5: "Preserves maximum fine detail and frames. Generates large files.",
};

// --- Theme Toggle Implementation ---
function initializeTheme() {
  const savedTheme =
    localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  htmlEl.setAttribute("data-theme", savedTheme);
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
  const currentTheme = htmlEl.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  htmlEl.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcons(newTheme);
});

initializeTheme();

// --- Formatting Helpers ---
function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

function formatDuration(sec: number) {
  if (isNaN(sec) || !isFinite(sec)) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60);
  const milliseconds = Math.floor((sec % 1) * 100);
  return `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
}

function revealLoadedSection() {
  loadedFileSection.style.display = "block";
  loadedFileSection.scrollIntoView({ behavior: "smooth" });
}

imageWorkflow = createImageWorkflow({
  formatBytes,
  revealLoadedSection,
});

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
  const dt = e.dataTransfer;
  const files = dt?.files;
  if (files && files.length > 0) {
    handleFileLoad(files[0]);
  }
});

videoFileInput.addEventListener("change", () => {
  if (videoFileInput.files && videoFileInput.files.length > 0) {
    handleFileLoad(videoFileInput.files[0]);
  }
});

function detectMediaKind(file: File): MediaKind | null {
  if (file.type.startsWith("video/")) return "video";
  if (file.type.startsWith("image/")) return "image";
  const lower = file.name.toLowerCase();
  if ([".mp4", ".mov", ".webm", ".mkv", ".avi"].some((ext) => lower.endsWith(ext))) return "video";
  if ([".jpg", ".jpeg", ".png", ".webp", ".avif", ".bmp", ".gif"].some((ext) => lower.endsWith(ext))) return "image";
  return null;
}

function setWorkspaceMode(kind: MediaKind) {
  videoWorkspace.style.display = kind === "video" ? "grid" : "none";
  imageWorkspace.style.display = kind === "image" ? "grid" : "none";
  progressSection.style.display = "none";
  resultSection.style.display = "none";
  imageResultSection.style.display = "none";
  imageWorkflow?.setActive(kind === "image");
}

async function handleFileLoad(file: File) {
  const kind = detectMediaKind(file);
  if (!kind) {
    alert("Unsupported file type. Please load a video or image file.");
    return;
  }
  if (kind === "video") {
    await handleVideoLoad(file);
  } else {
    setWorkspaceMode("image");
    if (currentSourceInput) {
      currentSourceInput.dispose();
      currentSourceInput = null;
    }
    await imageWorkflow?.load(file);
  }
}

// --- Loaded Video Processing & Attributes Checking ---
async function handleVideoLoad(file: File) {
  currentFile = file;
  setWorkspaceMode("video");
  console.log(`Loading video file: "${file.name}" (${formatBytes(file.size)})`);
  imageWorkflow?.dispose();

  // Reset Result Section
  resultSection.style.display = "none";
  if (originalCompareVideo.src) URL.revokeObjectURL(originalCompareVideo.src);
  if (outputVideo.src) URL.revokeObjectURL(outputVideo.src);
  originalCompareVideo.src = "";
  outputVideo.src = "";

  // Setup basic comparison preview URLs
  const fileUrl = URL.createObjectURL(file);
  previewVideo.src = fileUrl;
  originalCompareVideo.src = fileUrl;

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
          metaFps.textContent = `${stats.averagePacketRate.toFixed(2)} fps`;
          console.log(`Computed original FPS estimate: ${stats.averagePacketRate} fps from prefix stats.`);
        } else {
          metaFps.textContent = "Unknown";
        }
      } catch (err) {
        console.warn("Could not compute primary video packet stats for FPS metadata:", err);
        metaFps.textContent = "Unknown";
      }

      metaAtrack.textContent = audioTracks.length > 0 ? `${audioTracks.length} track(s)` : "Muted / None";

      console.log(
        `Video details: ${codedWidth}x${codedHeight} coded dimensions, display size ${sourceVideoWidth}x${sourceVideoHeight}, natural rotation: ${rotation}°`,
      );

      // Initialize resizer defaults
      resizeWidth.value = String(sourceVideoWidth);
      resizeHeight.value = String(sourceVideoHeight);
      resizeWidth.max = String(sourceVideoWidth * 2);
      resizeHeight.max = String(sourceVideoHeight * 2);

      // Initialize trim slider attributes
      trimStart.max = String(sourceVideoDuration);
      trimEnd.max = String(sourceVideoDuration);
      trimStart.value = "0";
      trimEnd.value = String(sourceVideoDuration);

      updateTrimVisuals(0, sourceVideoDuration);
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
  } catch (error: any) {
    console.error("An error occurred during video analysis profiling: ", error);
    alert(`Could not process video metadata: ${error.message || error}`);
  }
}

// --- Video Seek on Trim range slide ---
function updateTrimVisuals(startVal: number, endVal: number) {
  trimStartVal.textContent = `${startVal.toFixed(2)}s`;
  trimEndVal.textContent = `${endVal.toFixed(2)}s`;

  if (!sourceVideoDuration) return;

  const leftPercent = (startVal / sourceVideoDuration) * 100;
  const widthPercent = ((endVal - startVal) / sourceVideoDuration) * 100;

  trimSelectionBar.style.left = `${leftPercent}%`;
  trimSelectionBar.style.width = `${widthPercent}%`;
}

enableTrim.addEventListener("change", () => {
  if (enableTrim.checked) {
    trimControlsGroup.style.display = "block";
    const startVal = parseFloat(trimStart.value);
    updateTrimVisuals(startVal, parseFloat(trimEnd.value));
    previewVideo.currentTime = startVal;
  } else {
    trimControlsGroup.style.display = "none";
  }
});

trimStart.addEventListener("input", () => {
  isDraggingTrim = true;
  let startVal = parseFloat(trimStart.value);
  const endVal = parseFloat(trimEnd.value);

  // Prevent start slider from exceeding end slider
  if (startVal >= endVal) {
    startVal = Math.max(0, endVal - 0.05);
    trimStart.value = String(startVal);
  }

  // Float start slider above end
  trimStart.style.zIndex = "3";
  trimEnd.style.zIndex = "2";

  updateTrimVisuals(startVal, endVal);

  // Real-time video preview scrub
  previewVideo.currentTime = startVal;
});

trimEnd.addEventListener("input", () => {
  isDraggingTrim = true;
  const startVal = parseFloat(trimStart.value);
  let endVal = parseFloat(trimEnd.value);

  // Prevent end slider from stepping below start slider
  if (endVal <= startVal) {
    endVal = Math.min(sourceVideoDuration, startVal + 0.05);
    trimEnd.value = String(endVal);
  }

  // Float end slider above start
  trimStart.style.zIndex = "2";
  trimEnd.style.zIndex = "3";

  updateTrimVisuals(startVal, endVal);

  // Real-time video preview scrub
  previewVideo.currentTime = endVal;
});

// Event listeners to handle when the user lets go of the handles
trimStart.addEventListener("change", () => {
  isDraggingTrim = false;
});

trimEnd.addEventListener("change", () => {
  isDraggingTrim = false;
  const startVal = parseFloat(trimStart.value);
  previewVideo.currentTime = startVal;
});

// To support mobile touch bounds and immediate mouse-up overrides reliably
["mouseup", "touchend"].forEach((eventName) => {
  trimStart.addEventListener(eventName, () => {
    isDraggingTrim = false;
  });
  trimEnd.addEventListener(eventName, () => {
    isDraggingTrim = false;
    const startVal = parseFloat(trimStart.value);
    previewVideo.currentTime = startVal;
  });
});

// Playback Boundary Clamping & Loops
previewVideo.addEventListener("timeupdate", () => {
  if (enableTrim.checked && !isDraggingTrim) {
    const startVal = parseFloat(trimStart.value);
    const endVal = parseFloat(trimEnd.value);
    if (previewVideo.currentTime >= endVal) {
      previewVideo.pause();
      previewVideo.currentTime = startVal;
      console.log(
        `Playback crossed your selected clipping window end (${endVal.toFixed(2)}s). Paused & reset back to start boundary.`,
      );
    }
  }
});

previewVideo.addEventListener("play", () => {
  if (enableTrim.checked) {
    const startVal = parseFloat(trimStart.value);
    const endVal = parseFloat(trimEnd.value);
    if (previewVideo.currentTime < startVal || previewVideo.currentTime >= endVal) {
      previewVideo.currentTime = startVal;
    }
  }
});

// --- Custom Compression Bitrate Handlers ---
useCustomBitrate.addEventListener("change", () => {
  customBitrateGroup.style.display = useCustomBitrate.checked ? "block" : "none";
});

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

// --- Output Format Codec Alignment ---
outFormat.addEventListener("change", () => {
  const format = outFormat.value;
  outVcodec.innerHTML = "";

  if (format === "mp4") {
    const h264Opt = document.createElement("option");
    h264Opt.value = "avc";
    h264Opt.textContent = "H.264 / AVC (High compatibility)";
    h264Opt.selected = true;

    const hevcOpt = document.createElement("option");
    hevcOpt.value = "hevc";
    hevcOpt.textContent = "H.265 / HEVC (High compression)";

    outVcodec.appendChild(h264Opt);
    outVcodec.appendChild(hevcOpt);
  } else if (format === "webm") {
    const vp9Opt = document.createElement("option");
    vp9Opt.value = "vp9";
    vp9Opt.textContent = "VP9 (Modern WebM Open-source)";
    vp9Opt.selected = true;

    const vp8Opt = document.createElement("option");
    vp8Opt.value = "vp8";
    vp8Opt.textContent = "VP8 (Legacy compatibility)";

    const av1Opt = document.createElement("option");
    av1Opt.value = "av1";
    av1Opt.textContent = "AV1 (Ultra Next-Gen Format)";

    outVcodec.appendChild(vp9Opt);
    outVcodec.appendChild(vp8Opt);
    outVcodec.appendChild(av1Opt);
  }
});

// Compression slider value descriptor text
outQuality.addEventListener("input", () => {
  const val = parseInt(outQuality.value);
  outQualityVal.textContent = QUALITY_LABELS[val] || "Medium";
  qualityHelp.textContent = QUALITY_DESC[val] || "";
});

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
