// Shared crop-region editor used by the video and image workspaces.
//
// Renders a crop box over a media preview. Only the corner handles and a small
// center move grip take pointer input, so the media element underneath (e.g.
// the video's native controls) keeps working. While a corner is dragged, a
// loupe shows the source pixels at 100% (or more, when the preview is already
// zoomed in) around that corner; holding Shift moves the corner one source
// pixel per screen pixel for exact placement.
//
// The host owns the crop state and its rules (clamping, even sizes, syncing
// inputs): the editor proposes rects via `setCrop`, then the host calls
// `render()` once the state is updated.

export interface CropRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CropEditorOptions {
  /** Positioned element that exactly covers the displayed media. */
  container: HTMLElement;
  /** Native (source pixel) size of the media. */
  getSourceSize: () => { width: number; height: number };
  /** Current crop, in source pixels. */
  getCrop: () => CropRect;
  /** Propose a new crop; the host clamps/syncs it and calls `render()`. */
  setCrop: (crop: CropRect) => void;
  /** Drawable for the loupe; may be larger/smaller than the source size (it's scaled to match). */
  getLoupeSource: () => CanvasImageSource | null;
  /** Smallest width/height a corner drag may produce. */
  minSize?: number;
}

export interface CropEditor {
  /** Re-position the box from `getCrop()`. */
  render(): void;
  /** Show or hide the box. */
  setVisible(visible: boolean): void;
  /** When false, the box still shows but its handles ignore pointer input. */
  setInteractive(interactive: boolean): void;
}

type Handle = "nw" | "ne" | "sw" | "se" | "move";

const LOUPE_CSS_SIZE = 168;
const LOUPE_GAP = 28;

export function createCropEditor(opts: CropEditorOptions): CropEditor {
  const { container, getSourceSize, getCrop, setCrop, getLoupeSource } = opts;
  const minSize = opts.minSize ?? 8;

  const overlay = document.createElement("div");
  overlay.className = "crop-overlay";
  overlay.style.display = "none";
  const box = document.createElement("div");
  box.className = "crop-box";
  for (const h of ["nw", "ne", "sw", "se", "move"] as Handle[]) {
    const el = document.createElement("span");
    el.className = h === "move" ? "crop-move" : "crop-handle";
    el.dataset.handle = h;
    el.title = h === "move" ? "Drag to move the crop" : "Drag to resize (hold Shift for 1:1 precision)";
    box.append(el);
  }
  overlay.append(box);

  const loupe = document.createElement("div");
  loupe.className = "crop-loupe";
  loupe.style.display = "none";
  const loupeCanvas = document.createElement("canvas");
  const loupeLabel = document.createElement("div");
  loupeLabel.className = "crop-loupe-label";
  loupe.append(loupeCanvas, loupeLabel);
  overlay.append(loupe);
  container.append(overlay);

  let drag: {
    handle: Handle;
    pointerId: number;
    lastX: number;
    lastY: number;
    // Accumulated (unrounded) movement in source px, so fine drags aren't lost to rounding
    dx: number;
    dy: number;
    start: CropRect;
  } | null = null;

  function render() {
    const { width: W, height: H } = getSourceSize();
    if (!W || !H) return;
    const c = getCrop();
    box.style.left = `${(c.x / W) * 100}%`;
    box.style.top = `${(c.y / H) * 100}%`;
    box.style.width = `${(c.width / W) * 100}%`;
    box.style.height = `${(c.height / H) * 100}%`;
    if (drag && drag.handle !== "move") drawLoupe();
  }

  /** The source-pixel point a corner handle sits on. */
  function cornerPoint(handle: Handle, c: CropRect) {
    return {
      x: handle === "nw" || handle === "sw" ? c.x : c.x + c.width,
      y: handle === "nw" || handle === "ne" ? c.y : c.y + c.height,
    };
  }

  function drawLoupe() {
    if (!drag) return;
    const src = getLoupeSource();
    const { width: W, height: H } = getSourceSize();
    const rect = container.getBoundingClientRect();
    if (!src || !W || !H || !rect.width) return;

    const dpr = window.devicePixelRatio || 1;
    // 1 source px per CSS px, or more when the preview already shows it larger
    const zoom = Math.max(1, Math.ceil(rect.width / W));
    const size = LOUPE_CSS_SIZE;
    if (loupeCanvas.width !== size * dpr) {
      loupeCanvas.width = size * dpr;
      loupeCanvas.height = size * dpr;
    }
    const ctx = loupeCanvas.getContext("2d")!;
    ctx.setTransform(dpr * zoom, 0, 0, dpr * zoom, 0, 0);
    ctx.imageSmoothingEnabled = false;

    const c = getCrop();
    const p = cornerPoint(drag.handle, c);
    const span = size / zoom; // source px visible across the loupe
    const ox = p.x - span / 2;
    const oy = p.y - span / 2;

    // The drawable may not be at source resolution (e.g. a video element's intrinsic size)
    const srcW = (src as HTMLVideoElement).videoWidth || (src as { width: number }).width || W;
    const srcH = (src as HTMLVideoElement).videoHeight || (src as { height: number }).height || H;
    const kx = srcW / W;
    const ky = srcH / H;

    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, span, span);
    // Clip to the source bounds so out-of-range area stays as the dark backdrop
    const sx0 = Math.max(0, ox);
    const sy0 = Math.max(0, oy);
    const sx1 = Math.min(W, ox + span);
    const sy1 = Math.min(H, oy + span);
    if (sx1 > sx0 && sy1 > sy0) {
      ctx.drawImage(src, sx0 * kx, sy0 * ky, (sx1 - sx0) * kx, (sy1 - sy0) * ky, sx0 - ox, sy0 - oy, sx1 - sx0, sy1 - sy0);
    }

    // Outline the crop without dimming, so pixels on both sides of the edge stay
    // true to the source (dimming hid detail in dark footage)
    ctx.strokeStyle = "rgba(255, 107, 129, 0.95)";
    ctx.lineWidth = 1 / zoom;
    ctx.strokeRect(c.x - ox, c.y - oy, c.width, c.height);

    // Crosshair through the corner pixel
    ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
    ctx.beginPath();
    ctx.moveTo(p.x - ox, 0);
    ctx.lineTo(p.x - ox, span);
    ctx.moveTo(0, p.y - oy);
    ctx.lineTo(span, p.y - oy);
    ctx.stroke();

    loupeLabel.textContent = `corner ${p.x}, ${p.y} · ${zoom * 100}%\ncrop ${c.width}×${c.height}`;
  }

  function positionLoupe(handle: Handle, clientX: number, clientY: number) {
    // Outward from the dragged corner (so it doesn't cover the crop interior),
    // flipped per axis when that would leave the viewport
    const w = LOUPE_CSS_SIZE;
    const h = loupe.offsetHeight || LOUPE_CSS_SIZE + 36;
    const goLeft = handle === "nw" || handle === "sw";
    const goUp = handle === "nw" || handle === "ne";
    let left = goLeft ? clientX - w - LOUPE_GAP : clientX + LOUPE_GAP;
    let top = goUp ? clientY - h - LOUPE_GAP : clientY + LOUPE_GAP;
    if (left < 8) left = clientX + LOUPE_GAP;
    if (left + w > window.innerWidth - 8) left = clientX - w - LOUPE_GAP;
    if (top < 8) top = clientY + LOUPE_GAP;
    if (top + h > window.innerHeight - 8) top = clientY - h - LOUPE_GAP;
    loupe.style.left = `${Math.max(8, left)}px`;
    loupe.style.top = `${Math.max(8, top)}px`;
  }

  box.addEventListener("pointerdown", (e) => {
    const handle = (e.target as HTMLElement).dataset?.handle as Handle | undefined;
    if (!handle) return;
    e.preventDefault();
    e.stopPropagation();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    drag = { handle, pointerId: e.pointerId, lastX: e.clientX, lastY: e.clientY, dx: 0, dy: 0, start: { ...getCrop() } };
    if (handle !== "move") {
      loupe.style.display = "block";
      drawLoupe();
      positionLoupe(handle, e.clientX, e.clientY);
    }
  });

  box.addEventListener("pointermove", (e) => {
    if (!drag || e.pointerId !== drag.pointerId) return;
    const { width: W, height: H } = getSourceSize();
    const rect = container.getBoundingClientRect();
    if (!W || !H || !rect.width || !rect.height) return;

    // Screen movement -> source px: follows the cursor, or 1:1 with Shift held
    const fine = e.shiftKey && drag.handle !== "move";
    drag.dx += (e.clientX - drag.lastX) * (fine ? 1 : W / rect.width);
    drag.dy += (e.clientY - drag.lastY) * (fine ? 1 : H / rect.height);
    drag.lastX = e.clientX;
    drag.lastY = e.clientY;

    const s = drag.start;
    const h = drag.handle;
    if (h === "move") {
      setCrop({
        x: Math.round(Math.max(0, Math.min(s.x + drag.dx, W - s.width))),
        y: Math.round(Math.max(0, Math.min(s.y + drag.dy, H - s.height))),
        width: s.width,
        height: s.height,
      });
      return;
    }

    let { x, y, width, height } = s;
    const right = s.x + s.width;
    const bottom = s.y + s.height;
    if (h === "nw" || h === "sw") {
      x = Math.round(Math.max(0, Math.min(s.x + drag.dx, right - minSize)));
      width = right - x;
    } else {
      width = Math.round(Math.max(minSize, Math.min(s.width + drag.dx, W - s.x)));
    }
    if (h === "nw" || h === "ne") {
      y = Math.round(Math.max(0, Math.min(s.y + drag.dy, bottom - minSize)));
      height = bottom - y;
    } else {
      height = Math.round(Math.max(minSize, Math.min(s.height + drag.dy, H - s.y)));
    }
    setCrop({ x, y, width, height });
    positionLoupe(h, e.clientX, e.clientY);
  });

  const endDrag = (e: PointerEvent) => {
    if (!drag || e.pointerId !== drag.pointerId) return;
    drag = null;
    loupe.style.display = "none";
  };
  box.addEventListener("pointerup", endDrag);
  box.addEventListener("pointercancel", endDrag);

  return {
    render,
    setVisible(visible) {
      overlay.style.display = visible ? "block" : "none";
      if (visible) render();
    },
    setInteractive(interactive) {
      overlay.classList.toggle("is-passive", !interactive);
    },
  };
}
