// Batch image processing: shared format/quality/resize settings applied to many
// images. Queue, thumbnails, and ZIP "Download all" are handled by the generic
// batch engine; this module supplies the image-specific settings + processor.
import { createBatchEngine } from "./batchShared";

type CreateImageBatchOptions = {
  root: Document | ShadowRoot;
};

const MIME_EXT: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/avif": "avif",
};

export function createImageBatchWorkflow({ root }: CreateImageBatchOptions) {
  const g = <T extends HTMLElement>(id: string) => root.getElementById(id) as T;

  const outFormat = g<HTMLSelectElement>("batch-out-format");
  const quality = g<HTMLInputElement>("batch-quality");
  const qualityLabel = g<HTMLElement>("batch-quality-label");
  const enableResize = g<HTMLInputElement>("batch-enable-resize");
  const resizeControls = g<HTMLDivElement>("batch-resize-controls");
  const maxdimPreset = g<HTMLSelectElement>("batch-maxdim-preset");
  const maxdim = g<HTMLInputElement>("batch-maxdim");

  function updateQualityLabel() {
    const isPng = outFormat.value === "image/png";
    qualityLabel.textContent = isPng ? "Lossless" : parseFloat(quality.value).toFixed(2);
    quality.disabled = isPng;
  }

  function activeMaxDim(): number | null {
    if (!enableResize.checked) return null;
    const m = parseInt(maxdim.value);
    return !Number.isNaN(m) && m > 0 ? m : null;
  }

  function computeOutputSize(w: number, h: number) {
    const maxDim = activeMaxDim();
    if (maxDim === null) return { w, h };
    const longest = Math.max(w, h);
    // Downscale only — never enlarge an image already within the limit.
    const factor = longest > maxDim ? maxDim / longest : 1;
    return { w: Math.max(1, Math.round(w * factor)), h: Math.max(1, Math.round(h * factor)) };
  }

  async function canvasToBlob(canvas: HTMLCanvasElement, mime: string, q?: number): Promise<Blob> {
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("encode failed"))), mime, q);
    });
  }

  // Settings wiring
  outFormat.addEventListener("change", updateQualityLabel);
  quality.addEventListener("input", updateQualityLabel);
  enableResize.addEventListener("change", () => {
    resizeControls.style.display = enableResize.checked ? "block" : "none";
  });
  maxdimPreset.addEventListener("change", () => {
    if (maxdimPreset.value) maxdim.value = maxdimPreset.value;
  });
  maxdim.addEventListener("input", () => {
    if (maxdim.value !== maxdimPreset.value) maxdimPreset.value = "";
  });
  updateQualityLabel();

  const engine = createBatchEngine({
    elements: {
      thumbs: g("batch-thumbs"),
      inputCount: g("batch-input-count"),
      totalSize: g("batch-total-size"),
      queue: g("batch-queue"),
      count: g("batch-count"),
      processBtn: g<HTMLButtonElement>("batch-process-btn"),
      downloadAll: g<HTMLButtonElement>("batch-download-all"),
    },
    zipName: "media-converter-images.zip",
    processButtonLabel: (n) => `🖼️ Process All Images (${n})`,
    makeThumb: async (file) => URL.createObjectURL(file),
    process: async (file) => {
      const bitmap = await createImageBitmap(file);
      try {
        const { w, h } = computeOutputSize(bitmap.width, bitmap.height);
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        canvas.getContext("2d")!.drawImage(bitmap, 0, 0, w, h);

        const mime = outFormat.value;
        const q = mime === "image/png" ? undefined : parseFloat(quality.value);
        let ext = MIME_EXT[mime] || "jpg";
        let blob: Blob;
        try {
          blob = await canvasToBlob(canvas, mime, q);
        } catch {
          console.warn(`Format ${mime} unsupported for ${file.name}; falling back to JPEG.`);
          blob = await canvasToBlob(canvas, "image/jpeg", 0.9);
          ext = "jpg";
        }

        const dot = file.name.lastIndexOf(".");
        const base = dot > 0 ? file.name.slice(0, dot) : file.name;
        // Name by the actual output longest side (downscale-only keeps it accurate).
        const suffix = activeMaxDim() !== null ? `_${Math.max(w, h)}px` : "_web_export";
        return { blob, outName: `${base}${suffix}.${ext}` };
      } finally {
        bitmap.close();
      }
    },
  });

  return { start: engine.start, dispose: engine.dispose, setActive: engine.setActive };
}
