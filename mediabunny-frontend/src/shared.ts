// Shared helpers used across the video, image, audio, and batch workflows.
import {
  QUALITY_VERY_LOW,
  QUALITY_LOW,
  QUALITY_MEDIUM,
  QUALITY_HIGH,
  QUALITY_VERY_HIGH,
  Mp4OutputFormat,
  WebMOutputFormat,
  type OutputFormat,
} from "mediabunny";

// --- Formatting ---
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

export function formatDuration(sec: number): string {
  if (isNaN(sec) || !isFinite(sec)) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60);
  const milliseconds = Math.floor((sec % 1) * 100);
  return `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
}

// --- Video quality presets (subjective 1–5) ---
export const QUALITY_MAP: Record<number, typeof QUALITY_MEDIUM> = {
  1: QUALITY_VERY_LOW,
  2: QUALITY_LOW,
  3: QUALITY_MEDIUM,
  4: QUALITY_HIGH,
  5: QUALITY_VERY_HIGH,
};

export const QUALITY_LABELS: Record<number, string> = {
  1: "Very Low",
  2: "Low",
  3: "Medium",
  4: "High",
  5: "Very High",
};

export const QUALITY_DESC: Record<number, string> = {
  1: "Prioritizes hyper-compression over quality. Ideal for lightweight previews.",
  2: "Aggressive compression. Noticeable reduction in metadata and detail.",
  3: "Balanced bitrate and visual fidelity for typical social/web sharing.",
  4: "Excellent visual density. Great for standard professional distribution.",
  5: "Preserves maximum fine detail and frames. Generates large files.",
};

/** Approximate target bitrate per quality level (labels; 1080p30 reference). */
export const QUALITY_RATE: Record<number, string> = {
  1: "~600 kbps",
  2: "~1.5 Mbps",
  3: "~3.5 Mbps",
  4: "~7.5 Mbps",
  5: "~15 Mbps",
};

/** Same presets as Mbps numbers, for output-size estimates (1080p30 reference). */
export const QUALITY_MBPS: Record<number, number> = { 1: 0.6, 2: 1.5, 3: 3.5, 4: 7.5, 5: 15 };

// --- Video container / codec helpers ---
export type VideoContainer = "mp4" | "webm";

/** Rebuild a codec <select>'s options to match the chosen container. */
export function populateVideoCodecs(select: HTMLSelectElement, format: string) {
  const opts: { value: string; label: string }[] =
    format === "mp4"
      ? [
          { value: "avc", label: "H.264 / AVC (High compatibility)" },
          { value: "hevc", label: "H.265 / HEVC (High compression)" },
        ]
      : format === "webm"
        ? [
            { value: "vp9", label: "VP9 (Modern WebM Open-source)" },
            { value: "vp8", label: "VP8 (Legacy compatibility)" },
            { value: "av1", label: "AV1 (Ultra Next-Gen Format)" },
          ]
        : [];
  select.innerHTML = "";
  opts.forEach((o, i) => {
    const el = document.createElement("option");
    el.value = o.value;
    el.textContent = o.label;
    if (i === 0) el.selected = true;
    select.appendChild(el);
  });
}

/** Output format instance + mime/ext for a video container choice. */
export function videoOutputSpec(container: string): { format: OutputFormat; mime: string; ext: string } {
  if (container === "webm") {
    return { format: new WebMOutputFormat(), mime: "video/webm", ext: "webm" };
  }
  return { format: new Mp4OutputFormat(), mime: "video/mp4", ext: "mp4" };
}
