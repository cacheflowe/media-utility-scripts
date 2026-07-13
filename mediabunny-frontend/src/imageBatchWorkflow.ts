// Batch image processing: apply one set of shared settings (format, quality,
// resize) to many images at once. Outputs are offered as individual downloads
// (per-row links + a sequential "Download all").

import { zipStore, type ZipEntry } from "./zip";

type CreateImageBatchOptions = {
  root: Document | ShadowRoot;
  formatBytes: (bytes: number, decimals?: number) => string;
};

type BatchItem = {
  file: File;
  status: "pending" | "processing" | "done" | "error";
  blob?: Blob;
  url?: string;
  outName?: string;
  error?: string;
};

const MIME_EXT: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/avif": "avif",
};

export function createImageBatchWorkflow({ root, formatBytes }: CreateImageBatchOptions) {
  function getElement<T extends HTMLElement>(id: string, expected: string): T {
    const el = root.getElementById(id);
    if (!el) throw new Error(`DOM element not found: #${id} (expected ${expected})`);
    return el as T;
  }

  const outFormat = getElement<HTMLSelectElement>("batch-out-format", "select");
  const quality = getElement<HTMLInputElement>("batch-quality", "input");
  const qualityLabel = getElement<HTMLElement>("batch-quality-label", "small");
  const enableResize = getElement<HTMLInputElement>("batch-enable-resize", "input");
  const resizeControls = getElement<HTMLDivElement>("batch-resize-controls", "div");
  const maxdimPreset = getElement<HTMLSelectElement>("batch-maxdim-preset", "select");
  const maxdim = getElement<HTMLInputElement>("batch-maxdim", "input");
  const processBtn = getElement<HTMLButtonElement>("batch-process-btn", "button");
  const downloadAllBtn = getElement<HTMLButtonElement>("batch-download-all", "button");
  const queueEl = getElement<HTMLDivElement>("batch-queue", "div");
  const countEl = getElement<HTMLElement>("batch-count", "span");
  const thumbsEl = getElement<HTMLDivElement>("batch-thumbs", "div");
  const inputCountEl = getElement<HTMLElement>("batch-input-count", "span");
  const totalSizeEl = getElement<HTMLElement>("batch-total-size", "strong");

  let items: BatchItem[] = [];
  let thumbUrls: string[] = [];

  function revokeAll() {
    items.forEach((it) => {
      if (it.url) URL.revokeObjectURL(it.url);
    });
    thumbUrls.forEach((u) => URL.revokeObjectURL(u));
    thumbUrls = [];
  }

  function renderInput(files: File[]) {
    thumbsEl.innerHTML = "";
    let total = 0;
    for (const f of files) {
      total += f.size;
      const url = URL.createObjectURL(f);
      thumbUrls.push(url);
      const img = document.createElement("img");
      img.className = "batch-thumb";
      img.src = url;
      img.alt = f.name;
      img.title = f.name;
      thumbsEl.appendChild(img);
    }
    inputCountEl.textContent = String(files.length);
    totalSizeEl.textContent = formatBytes(total);
  }

  function updateQualityLabel() {
    const isPng = outFormat.value === "image/png";
    qualityLabel.textContent = isPng ? "Lossless" : parseFloat(quality.value).toFixed(2);
    quality.disabled = isPng;
  }

  function statusLabel(it: BatchItem) {
    if (it.status === "pending") return "Pending";
    if (it.status === "processing") return "Processing…";
    if (it.status === "error") return `Error: ${it.error || "failed"}`;
    return it.blob ? formatBytes(it.blob.size) : "Done";
  }

  function renderQueue() {
    countEl.textContent = String(items.length);
    queueEl.innerHTML = "";
    items.forEach((it, i) => {
      const row = document.createElement("div");
      row.className = "batch-item";
      row.dataset.status = it.status;

      const name = document.createElement("span");
      name.className = "batch-item-name";
      name.textContent = it.file.name;

      const status = document.createElement("span");
      status.className = "batch-item-status";
      status.textContent = statusLabel(it);

      row.appendChild(name);
      row.appendChild(status);

      if (it.status === "done" && it.url) {
        const dl = document.createElement("a");
        dl.className = "batch-item-dl";
        dl.href = it.url;
        dl.download = it.outName || `image_${i}`;
        dl.textContent = "Download";
        row.appendChild(dl);
      }
      queueEl.appendChild(row);
    });
    downloadAllBtn.style.display = items.some((it) => it.status === "done") ? "inline-block" : "none";
  }

  function activeMaxDim(): number | null {
    if (!enableResize.checked) return null;
    const maxDim = parseInt(maxdim.value);
    return !Number.isNaN(maxDim) && maxDim > 0 ? maxDim : null;
  }

  function computeOutputSize(w: number, h: number) {
    const maxDim = activeMaxDim();
    if (maxDim === null) return { w, h };
    const longest = Math.max(w, h);
    // Downscale only — never enlarge an image whose longest side is already ≤ maxDim.
    const factor = longest > maxDim ? maxDim / longest : 1;
    return { w: Math.max(1, Math.round(w * factor)), h: Math.max(1, Math.round(h * factor)) };
  }

  async function canvasToBlob(canvas: HTMLCanvasElement, mime: string, q?: number): Promise<Blob> {
    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => (blob ? resolve(blob) : reject(new Error("encode failed"))),
        mime,
        q,
      );
    });
  }

  async function processOne(it: BatchItem) {
    const bitmap = await createImageBitmap(it.file);
    try {
      const { w, h } = computeOutputSize(bitmap.width, bitmap.height);
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      canvas.getContext("2d")!.drawImage(bitmap, 0, 0, w, h);

      const mime = outFormat.value;
      const q = mime === "image/png" ? undefined : parseFloat(quality.value);
      let blob: Blob;
      let ext = MIME_EXT[mime] || "jpg";
      try {
        blob = await canvasToBlob(canvas, mime, q);
      } catch {
        console.warn(`Format ${mime} unsupported for ${it.file.name}; falling back to JPEG.`);
        blob = await canvasToBlob(canvas, "image/jpeg", 0.9);
        ext = "jpg";
      }

      if (it.url) URL.revokeObjectURL(it.url);
      it.blob = blob;
      it.url = URL.createObjectURL(blob);
      const dot = it.file.name.lastIndexOf(".");
      const base = dot > 0 ? it.file.name.slice(0, dot) : it.file.name;
      // Name by the ACTUAL output longest side (downscale-only means small images
      // keep their original size, so this stays accurate).
      const suffix = activeMaxDim() !== null ? `_${Math.max(w, h)}px` : "_web_export";
      it.outName = `${base}${suffix}.${ext}`;
      it.status = "done";
    } finally {
      bitmap.close();
    }
  }

  async function processAll() {
    processBtn.setAttribute("aria-busy", "true");
    processBtn.disabled = true;
    console.log(`🖼️ Batch: processing ${items.length} image(s)…`);
    for (const it of items) {
      it.status = "processing";
      renderQueue();
      try {
        await processOne(it);
      } catch (err: any) {
        it.status = "error";
        it.error = err?.message || String(err);
        console.error(`Batch item "${it.file.name}" failed:`, err);
      }
      renderQueue();
    }
    processBtn.removeAttribute("aria-busy");
    processBtn.disabled = false;
    const ok = items.filter((it) => it.status === "done").length;
    console.log(`✅ Batch complete: ${ok}/${items.length} succeeded.`);
  }

  function triggerDownload(url: string, name: string) {
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  // Bundle all outputs into a single .zip download. One download avoids Chrome's
  // multiple-automatic-downloads block entirely (and needs no folder permission).
  async function downloadAll() {
    const done = items.filter((it) => it.status === "done" && it.blob);
    if (!done.length) return;

    downloadAllBtn.setAttribute("aria-busy", "true");
    downloadAllBtn.disabled = true;
    try {
      const seen = new Set<string>();
      const entries: ZipEntry[] = [];
      for (const it of done) {
        let name = it.outName!;
        if (seen.has(name)) {
          const dot = name.lastIndexOf(".");
          const n = entries.length;
          name = dot > 0 ? `${name.slice(0, dot)}_${n}${name.slice(dot)}` : `${name}_${n}`;
        }
        seen.add(name);
        entries.push({ name, data: new Uint8Array(await it.blob!.arrayBuffer()) });
      }

      const zip = zipStore(entries);
      const url = URL.createObjectURL(zip);
      triggerDownload(url, "media-converter-batch.zip");
      setTimeout(() => URL.revokeObjectURL(url), 10_000);
      console.log(`📦 Zipped ${entries.length} file(s) → ${formatBytes(zip.size)}.`);
    } catch (err: any) {
      console.error("Failed to build zip:", err);
      alert(`Could not build the zip: ${err?.message || err}`);
    } finally {
      downloadAllBtn.removeAttribute("aria-busy");
      downloadAllBtn.disabled = false;
    }
  }

  // Wiring
  outFormat.addEventListener("change", updateQualityLabel);
  quality.addEventListener("input", updateQualityLabel);
  enableResize.addEventListener("change", () => {
    resizeControls.style.display = enableResize.checked ? "block" : "none";
  });
  // Preset just fills the editable number input, which is the source of truth.
  maxdimPreset.addEventListener("change", () => {
    if (maxdimPreset.value) maxdim.value = maxdimPreset.value;
  });
  // Typing a custom value clears the preset selection (it may no longer match).
  maxdim.addEventListener("input", () => {
    if (maxdim.value !== maxdimPreset.value) maxdimPreset.value = "";
  });
  processBtn.addEventListener("click", () => void processAll());
  downloadAllBtn.addEventListener("click", () => void downloadAll());

  function start(files: File[]) {
    revokeAll();
    items = files.map((file) => ({ file, status: "pending" }));
    processBtn.disabled = false;
    processBtn.textContent = `🖼️ Process All Images (${items.length})`;
    updateQualityLabel();
    renderInput(files);
    renderQueue();
    console.log(`Batch queued: ${items.length} image(s).`);
  }

  function dispose() {
    revokeAll();
    items = [];
  }

  function setActive() {
    /* no persistent playback to pause */
  }

  updateQualityLabel();

  return { start, dispose, setActive };
}
