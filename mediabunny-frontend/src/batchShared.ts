// Generic batch engine: manages a queue of files, renders input thumbnails +
// a per-file status list, runs a caller-supplied async `process` over each item
// sequentially, and bundles the outputs into a single ZIP download. Shared by
// the image and video batch workflows.
import { formatBytes } from "./shared";
import { zipStore, type ZipEntry } from "./zip";

export type BatchStatus = "pending" | "processing" | "done" | "error";

export interface BatchItem {
  file: File;
  status: BatchStatus;
  progress: number; // 0..1 while processing
  blob?: Blob;
  url?: string;
  outName?: string;
  error?: string;
}

export interface BatchEngineOptions {
  elements: {
    thumbs: HTMLElement;
    inputCount: HTMLElement;
    totalSize: HTMLElement;
    queue: HTMLElement;
    count: HTMLElement;
    processBtn: HTMLButtonElement;
    downloadAll: HTMLButtonElement;
  };
  zipName: string;
  processButtonLabel: (n: number) => string;
  /** Return a thumbnail src for the input file (blob: URLs are revoked on reset). */
  makeThumb: (file: File) => Promise<string | null>;
  /** Process one file; call onProgress(0..1) to update its row. */
  process: (file: File, onProgress: (p: number) => void) => Promise<{ blob: Blob; outName: string }>;
}

export function createBatchEngine(opts: BatchEngineOptions) {
  const { elements: el, zipName, processButtonLabel, makeThumb, process } = opts;
  let items: BatchItem[] = [];
  let thumbUrls: string[] = [];

  function revokeAll() {
    items.forEach((it) => it.url && URL.revokeObjectURL(it.url));
    thumbUrls.forEach((u) => u.startsWith("blob:") && URL.revokeObjectURL(u));
    thumbUrls = [];
  }

  function statusLabel(it: BatchItem): string {
    if (it.status === "pending") return "Pending";
    if (it.status === "processing") return `Processing… ${Math.round(it.progress * 100)}%`;
    if (it.status === "error") return `Error: ${it.error || "failed"}`;
    return it.blob ? formatBytes(it.blob.size) : "Done";
  }

  function renderQueue() {
    el.count.textContent = String(items.length);
    el.queue.innerHTML = "";
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

      row.append(name, status);

      if (it.status === "done" && it.url) {
        const dl = document.createElement("a");
        dl.className = "batch-item-dl";
        dl.href = it.url;
        dl.download = it.outName || `output_${i}`;
        dl.textContent = "Download";
        row.appendChild(dl);
      }
      el.queue.appendChild(row);
    });
    el.downloadAll.style.display = items.some((it) => it.status === "done") ? "inline-block" : "none";
  }

  async function renderInput(files: File[]) {
    el.thumbs.innerHTML = "";
    let total = 0;
    for (const f of files) total += f.size;
    el.inputCount.textContent = String(files.length);
    el.totalSize.textContent = formatBytes(total);

    for (const f of files) {
      const img = document.createElement("img");
      img.className = "batch-thumb";
      img.alt = f.name;
      img.title = f.name;
      el.thumbs.appendChild(img);
      makeThumb(f)
        .then((src) => {
          if (src) {
            img.src = src;
            thumbUrls.push(src);
          }
        })
        .catch(() => {});
    }
  }

  async function processAll() {
    el.processBtn.setAttribute("aria-busy", "true");
    el.processBtn.disabled = true;
    for (const it of items) {
      it.status = "processing";
      it.progress = 0;
      renderQueue();
      try {
        const { blob, outName } = await process(it.file, (p) => {
          it.progress = p;
          renderQueue();
        });
        if (it.url) URL.revokeObjectURL(it.url);
        it.blob = blob;
        it.url = URL.createObjectURL(blob);
        it.outName = outName;
        it.status = "done";
      } catch (err: any) {
        it.status = "error";
        it.error = err?.message || String(err);
        console.error(`Batch item "${it.file.name}" failed:`, err);
      }
      renderQueue();
    }
    el.processBtn.removeAttribute("aria-busy");
    el.processBtn.disabled = false;
    const ok = items.filter((it) => it.status === "done").length;
    console.log(`✅ Batch complete: ${ok}/${items.length} succeeded.`);
  }

  async function downloadAll() {
    const done = items.filter((it) => it.status === "done" && it.blob);
    if (!done.length) return;
    el.downloadAll.setAttribute("aria-busy", "true");
    el.downloadAll.disabled = true;
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
      const a = document.createElement("a");
      a.href = url;
      a.download = zipName;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10_000);
      console.log(`📦 Zipped ${entries.length} file(s) → ${formatBytes(zip.size)}.`);
    } catch (err: any) {
      console.error("Failed to build zip:", err);
      alert(`Could not build the zip: ${err?.message || err}`);
    } finally {
      el.downloadAll.removeAttribute("aria-busy");
      el.downloadAll.disabled = false;
    }
  }

  el.processBtn.addEventListener("click", () => void processAll());
  el.downloadAll.addEventListener("click", () => void downloadAll());

  return {
    start(files: File[]) {
      revokeAll();
      items = files.map((file) => ({ file, status: "pending" as BatchStatus, progress: 0 }));
      el.processBtn.disabled = false;
      el.processBtn.textContent = processButtonLabel(items.length);
      void renderInput(files);
      renderQueue();
      console.log(`Batch queued: ${items.length} file(s).`);
    },
    dispose() {
      revokeAll();
      items = [];
    },
    setActive() {
      /* no persistent playback */
    },
  };
}
