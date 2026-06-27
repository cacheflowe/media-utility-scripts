type CropDragHandle = "move" | "nw" | "ne" | "sw" | "se" | "new";

type PreviewTransform = {
  scale: number;
  offsetX: number;
  offsetY: number;
  drawWidth: number;
  drawHeight: number;
};

type CreateImageWorkflowOptions = {
  formatBytes: (bytes: number, decimals?: number) => string;
  revealLoadedSection: () => void;
};

const CROP_HANDLE_RADIUS = 12;
const CROP_MIN_SIZE = 8;
const BLUR_RADIUS_MIN = 1;
const BLUR_RADIUS_DEFAULT = 4;
const PIXELATE_MIN_SIZE = 4;

/** Safely query DOM element with type assertion and error on missing element */
function getElement<T extends HTMLElement>(id: string, expectedType: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`DOM element not found: #${id} (expected ${expectedType})`);
  return el as T;
}

export function createImageWorkflow({ formatBytes, revealLoadedSection }: CreateImageWorkflowOptions) {
  // Canvas and rendering elements
  const imageCanvasStage = getElement<HTMLDivElement>("image-canvas-stage", "div#image-canvas-stage");
  const imagePreviewCanvas = getElement<HTMLCanvasElement>("image-preview-canvas", "canvas#image-preview-canvas");
  const imageMaskCanvas = getElement<HTMLCanvasElement>("image-mask-canvas", "canvas#image-mask-canvas");

  // Metadata display elements
  const imgMetaName = getElement<HTMLSpanElement>("img-meta-name", "span#img-meta-name");
  const imgMetaSize = getElement<HTMLSpanElement>("img-meta-size", "span#img-meta-size");
  const imgMetaResolution = getElement<HTMLSpanElement>("img-meta-resolution", "span#img-meta-resolution");
  const imgMetaAspect = getElement<HTMLSpanElement>("img-meta-aspect", "span#img-meta-aspect");
  const imgMetaType = getElement<HTMLSpanElement>("img-meta-type", "span#img-meta-type");

  // Crop and canvas tool controls
  const imgEnableCrop = getElement<HTMLInputElement>("img-enable-crop", "input#img-enable-crop");
  const imgCanvasTool = getElement<HTMLSelectElement>("img-canvas-tool", "select#img-canvas-tool");
  const imgCanvasToolBadge = getElement<HTMLElement>("img-canvas-tool-badge", "span#img-canvas-tool-badge");
  const imgCropX = getElement<HTMLInputElement>("img-crop-x", "input#img-crop-x");
  const imgCropY = getElement<HTMLInputElement>("img-crop-y", "input#img-crop-y");
  const imgCropWidth = getElement<HTMLInputElement>("img-crop-width", "input#img-crop-width");
  const imgCropHeight = getElement<HTMLInputElement>("img-crop-height", "input#img-crop-height");
  const imgCropFull = getElement<HTMLButtonElement>("img-crop-full", "button#img-crop-full");
  const imgCropSquare = getElement<HTMLButtonElement>("img-crop-square", "button#img-crop-square");

  // Resize controls
  const imgEnableResize = getElement<HTMLInputElement>("img-enable-resize", "input#img-enable-resize");
  const imgOutWidth = getElement<HTMLInputElement>("img-out-width", "input#img-out-width");
  const imgOutHeight = getElement<HTMLInputElement>("img-out-height", "input#img-out-height");
  const imgScalePreset = getElement<HTMLSelectElement>("img-scale-preset", "select#img-scale-preset");
  const imgMaxDimPreset = getElement<HTMLSelectElement>("img-maxdim-preset", "select#img-maxdim-preset");
  const imgLockAspect = getElement<HTMLInputElement>("img-lock-aspect", "input#img-lock-aspect");

  // Redaction/brush controls
  const imgEnableBlur = getElement<HTMLInputElement>("img-enable-blur", "input#img-enable-blur");
  const imgRedactionMode = getElement<HTMLSelectElement>("img-redaction-mode", "select#img-redaction-mode");
  const imgBrushSize = getElement<HTMLInputElement>("img-brush-size", "input#img-brush-size");
  const imgBlurStrength = getElement<HTMLInputElement>("img-blur-strength", "input#img-blur-strength");
  const imgEraseMode = getElement<HTMLInputElement>("img-erase-mode", "input#img-erase-mode");
  const imgClearMask = getElement<HTMLButtonElement>("img-clear-mask", "button#img-clear-mask");

  // Format and export controls
  const imgOutFormat = getElement<HTMLSelectElement>("img-out-format", "select#img-out-format");
  const imgQuality = getElement<HTMLInputElement>("img-quality", "input#img-quality");
  const imgQualityLabel = getElement<HTMLElement>("img-quality-label", "span#img-quality-label");

  // Form and result section
  const imageForm = getElement<HTMLFormElement>("image-form", "form#image-form");
  const imageResultSection = getElement<HTMLElement>("image-result-section", "section#image-result-section");
  const imageDownloadAnchor = getElement<HTMLAnchorElement>("image-download-anchor", "a#image-download-anchor");
  const imageOutputSizeTag = getElement<HTMLElement>("image-output-size-tag", "span#image-output-size-tag");
  const imageOriginalPreview = getElement<HTMLImageElement>("image-original-preview", "img#image-original-preview");
  const imageOutputPreview = getElement<HTMLImageElement>("image-output-preview", "img#image-output-preview");

  let currentFile: File | null = null;
  let sourceImageBitmap: ImageBitmap | null = null;
  let sourceImageMaskCanvas: HTMLCanvasElement | null = null;
  let sourceImageMaskCtx: CanvasRenderingContext2D | null = null;
  let sourceImageWidth = 0;
  let sourceImageHeight = 0;
  let cropDimensionDisplay: HTMLElement | null = null;
  let currentImageObjectUrl: string | null = null;
  let currentImageOutputUrl: string | null = null;
  let isPaintingMask = false;
  let lastMaskPoint: { x: number; y: number } | null = null;
  let isActive = false;
  let previewTransform: PreviewTransform = {
    scale: 1,
    offsetX: 0,
    offsetY: 0,
    drawWidth: 0,
    drawHeight: 0,
  };
  let activeCropDrag: {
    handle: CropDragHandle;
    startPoint: { x: number; y: number };
    startCrop: { x: number; y: number; width: number; height: number };
  } | null = null;

  function revokeImageUrls() {
    if (currentImageObjectUrl) {
      URL.revokeObjectURL(currentImageObjectUrl);
      currentImageObjectUrl = null;
    }
    if (currentImageOutputUrl) {
      URL.revokeObjectURL(currentImageOutputUrl);
      currentImageOutputUrl = null;
    }
  }

  function clampInt(val: number, min: number, max: number) {
    return Math.min(max, Math.max(min, Math.round(val)));
  }

  function getNormalizedCrop() {
    if (!sourceImageWidth || !sourceImageHeight) {
      return { x: 0, y: 0, width: 1, height: 1 };
    }

    if (!imgEnableCrop.checked) {
      return { x: 0, y: 0, width: sourceImageWidth, height: sourceImageHeight };
    }

    const x = clampInt(parseInt(imgCropX.value) || 0, 0, sourceImageWidth - 1);
    const y = clampInt(parseInt(imgCropY.value) || 0, 0, sourceImageHeight - 1);
    const width = clampInt(parseInt(imgCropWidth.value) || sourceImageWidth, 1, sourceImageWidth - x);
    const height = clampInt(parseInt(imgCropHeight.value) || sourceImageHeight, 1, sourceImageHeight - y);

    imgCropX.value = String(x);
    imgCropY.value = String(y);
    imgCropWidth.value = String(width);
    imgCropHeight.value = String(height);

    return { x, y, width, height };
  }

  function resizeImageCanvases(width: number, height: number) {
    imagePreviewCanvas.width = width;
    imagePreviewCanvas.height = height;
    imageMaskCanvas.width = width;
    imageMaskCanvas.height = height;
  }

  function getPreviewCropRect() {
    const crop = getNormalizedCrop();
    const { offsetX, offsetY, scale } = previewTransform;
    return {
      x: offsetX + crop.x * scale,
      y: offsetY + crop.y * scale,
      width: crop.width * scale,
      height: crop.height * scale,
    };
  }

  function getStagePoint(clientX: number, clientY: number) {
    const rect = imageCanvasStage.getBoundingClientRect();
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  }

  function clampCropAndSync(crop: { x: number; y: number; width: number; height: number }) {
    const x = clampInt(crop.x, 0, Math.max(0, sourceImageWidth - 1));
    const y = clampInt(crop.y, 0, Math.max(0, sourceImageHeight - 1));
    const width = clampInt(crop.width, 1, Math.max(1, sourceImageWidth - x));
    const height = clampInt(crop.height, 1, Math.max(1, sourceImageHeight - y));
    imgCropX.value = String(x);
    imgCropY.value = String(y);
    imgCropWidth.value = String(width);
    imgCropHeight.value = String(height);
    updateCropDimensionDisplay(width, height);
  }

  function updateCropDimensionDisplay(width: number, height: number) {
    if (!cropDimensionDisplay) return;
    cropDimensionDisplay.textContent = `${width} × ${height}px`;
  }

  function getCropHandleAtPoint(stageX: number, stageY: number): CropDragHandle | null {
    const crop = getPreviewCropRect();
    const handles: Array<[CropDragHandle, number, number]> = [
      ["nw", crop.x, crop.y],
      ["ne", crop.x + crop.width, crop.y],
      ["sw", crop.x, crop.y + crop.height],
      ["se", crop.x + crop.width, crop.y + crop.height],
    ];

    for (const [handle, hx, hy] of handles) {
      if (Math.hypot(stageX - hx, stageY - hy) <= CROP_HANDLE_RADIUS) {
        return handle;
      }
    }

    if (stageX >= crop.x && stageX <= crop.x + crop.width && stageY >= crop.y && stageY <= crop.y + crop.height) {
      return "move";
    }

    const { offsetX, offsetY, drawWidth, drawHeight } = previewTransform;
    if (stageX >= offsetX && stageX <= offsetX + drawWidth && stageY >= offsetY && stageY <= offsetY + drawHeight) {
      return "new";
    }

    return null;
  }

  function renderMaskPreview() {
    const mctx = imageMaskCanvas.getContext("2d")!;
    mctx.clearRect(0, 0, imageMaskCanvas.width, imageMaskCanvas.height);
    if (!sourceImageMaskCanvas || !imgEnableBlur.checked) return;

    // Mask canvas is same size as preview, draw the full masked region
    mctx.drawImage(sourceImageMaskCanvas, 0, 0, imageMaskCanvas.width, imageMaskCanvas.height);
  }

  function renderImageWorkspace() {
    if (!sourceImageBitmap) return;
    const stageRect = imageCanvasStage.getBoundingClientRect();
    const containerWidth = Math.max(1, Math.floor(stageRect.width));
    if (containerWidth <= 1) return;
    const scale = containerWidth / sourceImageWidth;
    const drawWidth = containerWidth;
    const drawHeight = Math.max(1, Math.floor(sourceImageHeight * scale));

    // Keep stage tightly fitted to the rendered image to avoid letterboxing.
    imageCanvasStage.style.height = `${drawHeight}px`;

    previewTransform = { scale, offsetX: 0, offsetY: 0, drawWidth, drawHeight };

    resizeImageCanvases(drawWidth, drawHeight);
    imagePreviewCanvas.style.left = "0px";
    imagePreviewCanvas.style.top = "0px";
    imageMaskCanvas.style.left = "0px";
    imageMaskCanvas.style.top = "0px";

    // Draw image at full canvas resolution
    const pctx = imagePreviewCanvas.getContext("2d")!;
    pctx.clearRect(0, 0, drawWidth, drawHeight);
    pctx.drawImage(sourceImageBitmap, 0, 0, drawWidth, drawHeight);

    const crop = getNormalizedCrop();
    const cropX = crop.x * scale;
    const cropY = crop.y * scale;
    const cropW = crop.width * scale;
    const cropH = crop.height * scale;

    pctx.save();
    pctx.strokeStyle = "rgba(255, 107, 129, 0.95)";
    pctx.lineWidth = 2;
    pctx.setLineDash([8, 5]);
    pctx.strokeRect(cropX, cropY, cropW, cropH);
    pctx.setLineDash([]);
    pctx.fillStyle = "rgba(255, 107, 129, 0.95)";
    const handleSize = 10;
    [
      [cropX, cropY],
      [cropX + cropW, cropY],
      [cropX, cropY + cropH],
      [cropX + cropW, cropY + cropH],
    ].forEach(([x, y]) => {
      pctx.fillRect(x - handleSize / 2, y - handleSize / 2, handleSize, handleSize);
    });
    pctx.restore();

    renderMaskPreview();
  }

  function clearImageMask() {
    if (!sourceImageMaskCtx || !sourceImageMaskCanvas) return;
    sourceImageMaskCtx.clearRect(0, 0, sourceImageMaskCanvas.width, sourceImageMaskCanvas.height);
    renderMaskPreview();
  }

  function toSourcePoint(clientX: number, clientY: number) {
    const stagePoint = getStagePoint(clientX, clientY);
    const x = stagePoint.x;
    const y = stagePoint.y;
    const { offsetX, offsetY, scale, drawWidth, drawHeight } = previewTransform;

    if (x < offsetX || y < offsetY || x > offsetX + drawWidth || y > offsetY + drawHeight) {
      return null;
    }

    const sx = clampInt((x - offsetX) / scale, 0, sourceImageWidth - 1);
    const sy = clampInt((y - offsetY) / scale, 0, sourceImageHeight - 1);
    return { x: sx, y: sy };
  }

  function paintMaskStroke(from: { x: number; y: number }, to: { x: number; y: number }) {
    if (!sourceImageMaskCtx) return;
    const brush = parseInt(imgBrushSize.value) || 40;
    sourceImageMaskCtx.save();
    sourceImageMaskCtx.lineCap = "round";
    sourceImageMaskCtx.lineJoin = "round";
    sourceImageMaskCtx.lineWidth = Math.max(2, brush / Math.max(0.1, previewTransform.scale));
    sourceImageMaskCtx.globalCompositeOperation = imgEraseMode.checked ? "destination-out" : "source-over";
    sourceImageMaskCtx.strokeStyle = "rgba(255, 72, 72, 0.82)";
    sourceImageMaskCtx.beginPath();
    sourceImageMaskCtx.moveTo(from.x, from.y);
    sourceImageMaskCtx.lineTo(to.x, to.y);
    sourceImageMaskCtx.stroke();
    sourceImageMaskCtx.restore();
    renderMaskPreview();
  }

  function resetImageCropToFull() {
    imgCropX.value = "0";
    imgCropY.value = "0";
    imgCropWidth.value = String(sourceImageWidth || 1);
    imgCropHeight.value = String(sourceImageHeight || 1);
    imgOutWidth.value = imgCropWidth.value;
    imgOutHeight.value = imgCropHeight.value;
  }

  function syncImageOutputFromCrop() {
    const crop = getNormalizedCrop();
    imgOutWidth.value = String(crop.width);
    imgOutHeight.value = String(crop.height);
  }

  function updateImageToolMode() {
    const cropMode = imgCanvasTool.value === "crop";
    imageCanvasStage.classList.toggle("is-crop-mode", cropMode);
    imageCanvasStage.classList.toggle("is-paint-mode", !cropMode);
    imgCanvasToolBadge.textContent = cropMode ? "Current: Crop Box" : "Current: Paint Redaction";
    imgCanvasToolBadge.classList.toggle("tool-badge-crop", cropMode);
    imgCanvasToolBadge.classList.toggle("tool-badge-paint", !cropMode);
  }

  function updateQualityLabel() {
    const q = parseFloat(imgQuality.value).toFixed(2);
    imgQualityLabel.textContent = imgOutFormat.value === "image/png" ? "Lossless" : q;
    imgQuality.disabled = imgOutFormat.value === "image/png";
  }

  function applyScalePreset(scale: number) {
    if (!Number.isFinite(scale) || scale <= 0) return;
    const crop = getNormalizedCrop();
    const outW = Math.max(1, Math.round(crop.width * scale));
    const outH = Math.max(1, Math.round(crop.height * scale));
    imgEnableResize.checked = true;
    imgOutWidth.value = String(outW);
    imgOutHeight.value = String(outH);
  }

  function applyMaxDimensionPreset(maxDimension: number) {
    if (!Number.isFinite(maxDimension) || maxDimension <= 0) return;
    const crop = getNormalizedCrop();
    const longest = Math.max(crop.width, crop.height);
    const factor = longest > 0 ? maxDimension / longest : 1;
    const outW = Math.max(1, Math.round(crop.width * factor));
    const outH = Math.max(1, Math.round(crop.height * factor));
    imgEnableResize.checked = true;
    imgOutWidth.value = String(outW);
    imgOutHeight.value = String(outH);
  }

  function applyCropDrag(sourcePoint: { x: number; y: number }) {
    if (!activeCropDrag) return;

    const { handle, startPoint, startCrop } = activeCropDrag;
    const deltaX = sourcePoint.x - startPoint.x;
    const deltaY = sourcePoint.y - startPoint.y;

    if (handle === "move") {
      clampCropAndSync({
        x: startCrop.x + deltaX,
        y: startCrop.y + deltaY,
        width: startCrop.width,
        height: startCrop.height,
      });
      return;
    }

    if (handle === "new") {
      const x1 = Math.min(startPoint.x, sourcePoint.x);
      const y1 = Math.min(startPoint.y, sourcePoint.y);
      const x2 = Math.max(startPoint.x, sourcePoint.x);
      const y2 = Math.max(startPoint.y, sourcePoint.y);
      clampCropAndSync({
        x: x1,
        y: y1,
        width: Math.max(CROP_MIN_SIZE, x2 - x1),
        height: Math.max(CROP_MIN_SIZE, y2 - y1),
      });
      return;
    }

    let x = startCrop.x;
    let y = startCrop.y;
    let width = startCrop.width;
    let height = startCrop.height;
    const right = startCrop.x + startCrop.width;
    const bottom = startCrop.y + startCrop.height;

    if (handle === "nw" || handle === "sw") {
      x = Math.min(sourcePoint.x, right - CROP_MIN_SIZE);
      width = right - x;
    }
    if (handle === "ne" || handle === "se") {
      width = Math.max(CROP_MIN_SIZE, sourcePoint.x - startCrop.x);
    }
    if (handle === "nw" || handle === "ne") {
      y = Math.min(sourcePoint.y, bottom - CROP_MIN_SIZE);
      height = bottom - y;
    }
    if (handle === "sw" || handle === "se") {
      height = Math.max(CROP_MIN_SIZE, sourcePoint.y - startCrop.y);
    }

    clampCropAndSync({ x, y, width, height });
  }

  function mapImageMimeToExt(mime: string) {
    if (mime === "image/png") return "png";
    if (mime === "image/webp") return "webp";
    if (mime === "image/avif") return "avif";
    return "jpg";
  }

  async function canvasToBlob(canvas: HTMLCanvasElement, mime: string, quality?: number) {
    return await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("Could not encode output image."));
            return;
          }
          resolve(blob);
        },
        mime,
        quality,
      );
    });
  }

  function resetLoadedState() {
    if (sourceImageBitmap) {
      sourceImageBitmap.close();
      sourceImageBitmap = null;
    }
    sourceImageMaskCanvas = null;
    sourceImageMaskCtx = null;
    sourceImageWidth = 0;
    sourceImageHeight = 0;
    currentFile = null;
    isPaintingMask = false;
    lastMaskPoint = null;
    activeCropDrag = null;
    revokeImageUrls();
  }

  async function load(file: File) {
    resetLoadedState();
    currentFile = file;
    imageResultSection.style.display = "none";
    currentImageObjectUrl = URL.createObjectURL(file);

    sourceImageBitmap = await createImageBitmap(file);
    sourceImageWidth = sourceImageBitmap.width;
    sourceImageHeight = sourceImageBitmap.height;

    sourceImageMaskCanvas = document.createElement("canvas");
    sourceImageMaskCanvas.width = sourceImageWidth;
    sourceImageMaskCanvas.height = sourceImageHeight;
    sourceImageMaskCtx = sourceImageMaskCanvas.getContext("2d");

    imgMetaName.textContent = file.name;
    imgMetaSize.textContent = formatBytes(file.size);
    imgMetaResolution.textContent = `${sourceImageWidth}x${sourceImageHeight}`;
    imgMetaAspect.textContent = `${(sourceImageWidth / sourceImageHeight).toFixed(2)}:1`;
    imgMetaType.textContent = file.type || "image/*";

    imageOriginalPreview.src = currentImageObjectUrl;
    imageOutputPreview.src = "";

    resetImageCropToFull();
    clearImageMask();
    updateImageToolMode();
    updateQualityLabel();

    // Set up live crop dimension display
    if (!cropDimensionDisplay) {
      cropDimensionDisplay = document.createElement("div");
      cropDimensionDisplay.style.cssText =
        "position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.7); color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 0.85rem; font-weight: 500; font-family: monospace; z-index: 10; pointer-events: none;";
      imageCanvasStage.appendChild(cropDimensionDisplay);
    }
    const crop = getNormalizedCrop();
    updateCropDimensionDisplay(crop.width, crop.height);

    revealLoadedSection();
    renderImageWorkspace();
    requestAnimationFrame(() => {
      renderImageWorkspace();
    });
    console.log(`Loaded image file: "${file.name}" (${sourceImageWidth}x${sourceImageHeight})`);
  }

  function setActive(active: boolean) {
    isActive = active;
    updateImageToolMode();
  }

  [imgCropX, imgCropY, imgCropWidth, imgCropHeight].forEach((el) => {
    el.addEventListener("input", () => {
      getNormalizedCrop();
      syncImageOutputFromCrop();
      renderImageWorkspace();
    });
  });

  imgEnableCrop.addEventListener("change", () => {
    syncImageOutputFromCrop();
    renderImageWorkspace();
  });

  imgCanvasTool.addEventListener("change", () => {
    updateImageToolMode();
  });

  imgCropFull.addEventListener("click", () => {
    resetImageCropToFull();
    renderImageWorkspace();
  });

  imgCropSquare.addEventListener("click", () => {
    const size = Math.min(sourceImageWidth, sourceImageHeight);
    const x = Math.floor((sourceImageWidth - size) / 2);
    const y = Math.floor((sourceImageHeight - size) / 2);
    imgCropX.value = String(x);
    imgCropY.value = String(y);
    imgCropWidth.value = String(size);
    imgCropHeight.value = String(size);
    syncImageOutputFromCrop();
    renderImageWorkspace();
  });

  imgEnableResize.addEventListener("change", () => {
    syncImageOutputFromCrop();
  });

  imgScalePreset.addEventListener("change", () => {
    const value = parseFloat(imgScalePreset.value);
    if (!Number.isNaN(value)) {
      applyScalePreset(value);
    }
  });

  imgMaxDimPreset.addEventListener("change", () => {
    const value = parseInt(imgMaxDimPreset.value);
    if (!Number.isNaN(value)) {
      applyMaxDimensionPreset(value);
    }
  });

  imgOutWidth.addEventListener("input", () => {
    if (!imgLockAspect.checked) return;
    const crop = getNormalizedCrop();
    const outW = parseInt(imgOutWidth.value) || crop.width;
    const ratio = crop.width / crop.height;
    imgOutHeight.value = String(Math.max(1, Math.round(outW / ratio)));
  });

  imgOutHeight.addEventListener("input", () => {
    if (!imgLockAspect.checked) return;
    const crop = getNormalizedCrop();
    const outH = parseInt(imgOutHeight.value) || crop.height;
    const ratio = crop.width / crop.height;
    imgOutWidth.value = String(Math.max(1, Math.round(outH * ratio)));
  });

  imgEnableBlur.addEventListener("change", () => {
    renderMaskPreview();
  });

  imgClearMask.addEventListener("click", () => {
    clearImageMask();
  });

  imgOutFormat.addEventListener("change", () => {
    updateQualityLabel();
  });

  imgQuality.addEventListener("input", () => {
    updateQualityLabel();
  });

  imageMaskCanvas.addEventListener("pointerdown", (e) => {
    if (!sourceImageBitmap) return;
    const point = toSourcePoint(e.clientX, e.clientY);
    if (!point) return;

    if (imgCanvasTool.value === "crop") {
      const stagePoint = getStagePoint(e.clientX, e.clientY);
      const handle = getCropHandleAtPoint(stagePoint.x, stagePoint.y);
      if (!handle) return;
      activeCropDrag = {
        handle,
        startPoint: point,
        startCrop: getNormalizedCrop(),
      };
    } else {
      if (!imgEnableBlur.checked) return;
      isPaintingMask = true;
      lastMaskPoint = point;
      paintMaskStroke(point, point);
    }

    imageMaskCanvas.setPointerCapture(e.pointerId);
  });

  imageMaskCanvas.addEventListener("pointermove", (e) => {
    const point = toSourcePoint(e.clientX, e.clientY);
    if (!point) return;

    if (activeCropDrag) {
      applyCropDrag(point);
      syncImageOutputFromCrop();
      renderImageWorkspace();
      return;
    }

    if (!isPaintingMask || !lastMaskPoint) return;
    paintMaskStroke(lastMaskPoint, point);
    lastMaskPoint = point;
  });

  const stopMaskPaint = () => {
    isPaintingMask = false;
    lastMaskPoint = null;
    activeCropDrag = null;
  };

  // Unified pointer event cleanup handler
  const handlePointerEnd = (e?: PointerEvent) => {
    if (e?.pointerId !== undefined) {
      imageMaskCanvas.releasePointerCapture(e.pointerId);
    }
    stopMaskPaint();
  };

  imageMaskCanvas.addEventListener("pointerup", handlePointerEnd);
  imageMaskCanvas.addEventListener("pointercancel", handlePointerEnd);
  imageMaskCanvas.addEventListener("pointerleave", stopMaskPaint);

  window.addEventListener("resize", () => {
    if (isActive) {
      renderImageWorkspace();
    }
  });

  imageForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!currentFile || !sourceImageBitmap) {
      alert("Please load an image first.");
      return;
    }

    try {
      const crop = getNormalizedCrop();
      const cropCanvas = document.createElement("canvas");
      cropCanvas.width = crop.width;
      cropCanvas.height = crop.height;
      const cropCtx = cropCanvas.getContext("2d")!;
      cropCtx.drawImage(sourceImageBitmap, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);

      if (imgEnableBlur.checked && sourceImageMaskCanvas && sourceImageMaskCtx) {
        const effectStrength = Math.max(BLUR_RADIUS_MIN, parseInt(imgBlurStrength.value) || BLUR_RADIUS_DEFAULT);
        const maskCropCanvas = document.createElement("canvas");
        maskCropCanvas.width = crop.width;
        maskCropCanvas.height = crop.height;
        const maskCropCtx = maskCropCanvas.getContext("2d")!;
        maskCropCtx.drawImage(
          sourceImageMaskCanvas,
          crop.x,
          crop.y,
          crop.width,
          crop.height,
          0,
          0,
          crop.width,
          crop.height,
        );

        const effectCanvas = document.createElement("canvas");
        effectCanvas.width = crop.width;
        effectCanvas.height = crop.height;
        const effectCtx = effectCanvas.getContext("2d")!;

        if (imgRedactionMode.value === "pixelate") {
          const pixelSize = Math.max(PIXELATE_MIN_SIZE, effectStrength);
          const downscaleWidth = Math.max(1, Math.round(crop.width / pixelSize));
          const downscaleHeight = Math.max(1, Math.round(crop.height / pixelSize));
          const tempCanvas = document.createElement("canvas");
          tempCanvas.width = downscaleWidth;
          tempCanvas.height = downscaleHeight;
          const tempCtx = tempCanvas.getContext("2d")!;
          tempCtx.imageSmoothingEnabled = false;
          tempCtx.drawImage(cropCanvas, 0, 0, downscaleWidth, downscaleHeight);
          effectCtx.imageSmoothingEnabled = false;
          effectCtx.drawImage(tempCanvas, 0, 0, downscaleWidth, downscaleHeight, 0, 0, crop.width, crop.height);
        } else if (imgRedactionMode.value === "black") {
          effectCtx.fillStyle = "#000000";
          effectCtx.fillRect(0, 0, crop.width, crop.height);
        } else {
          effectCtx.filter = `blur(${effectStrength}px)`;
          effectCtx.drawImage(cropCanvas, 0, 0);
          effectCtx.filter = "none";
        }

        const maskedEffectCanvas = document.createElement("canvas");
        maskedEffectCanvas.width = crop.width;
        maskedEffectCanvas.height = crop.height;
        const maskedEffectCtx = maskedEffectCanvas.getContext("2d")!;
        maskedEffectCtx.drawImage(effectCanvas, 0, 0);
        maskedEffectCtx.globalCompositeOperation = "destination-in";
        maskedEffectCtx.drawImage(maskCropCanvas, 0, 0);
        maskedEffectCtx.globalCompositeOperation = "source-over";

        cropCtx.drawImage(maskedEffectCanvas, 0, 0);
      }

      let finalCanvas = cropCanvas;
      if (imgEnableResize.checked) {
        const outW = Math.max(1, parseInt(imgOutWidth.value) || crop.width);
        const outH = Math.max(1, parseInt(imgOutHeight.value) || crop.height);
        const resized = document.createElement("canvas");
        resized.width = outW;
        resized.height = outH;
        resized.getContext("2d")!.drawImage(cropCanvas, 0, 0, outW, outH);
        finalCanvas = resized;
      }

      const mime = imgOutFormat.value;
      const quality = mime === "image/png" ? undefined : parseFloat(imgQuality.value);
      let blob: Blob;
      try {
        blob = await canvasToBlob(finalCanvas, mime, quality);
      } catch {
        console.warn(`Primary output format ${mime} was unsupported. Falling back to JPEG.`);
        blob = await canvasToBlob(finalCanvas, "image/jpeg", 0.9);
      }

      if (currentImageOutputUrl) URL.revokeObjectURL(currentImageOutputUrl);
      currentImageOutputUrl = URL.createObjectURL(blob);

      const ext = mapImageMimeToExt(blob.type || mime);
      const dotIndex = currentFile.name.lastIndexOf(".");
      const base = dotIndex > 0 ? currentFile.name.slice(0, dotIndex) : currentFile.name;

      imageDownloadAnchor.href = currentImageOutputUrl;
      imageDownloadAnchor.download = `${base}_web_export.${ext}`;
      imageOutputSizeTag.textContent = `Size: ${formatBytes(blob.size)}`;
      imageOutputPreview.src = currentImageOutputUrl;
      imageResultSection.style.display = "block";
      imageResultSection.scrollIntoView({ behavior: "smooth" });
      console.log(`Image processing complete. Output: ${formatBytes(blob.size)} (${ext.toUpperCase()})`);
    } catch (error: any) {
      console.error("Image processing failed:", error);
      alert(`Image processing failed: ${error.message || error}`);
    }
  });

  updateQualityLabel();
  updateImageToolMode();

  return {
    load,
    dispose: resetLoadedState,
    setActive,
  };
}
