// Reusable dual-handle trim controller. Drives two overlapping range inputs, a
// selection bar, value labels, and scrubs/clamps a media element. Shared by the
// video and audio workspaces.

export interface TrimControllerOptions {
  media: HTMLMediaElement;
  enable: HTMLInputElement;
  controlsGroup: HTMLElement;
  startInput: HTMLInputElement;
  endInput: HTMLInputElement;
  startLabel: HTMLElement;
  endLabel: HTMLElement;
  selectionBar: HTMLElement;
  /** Fired when the enable state or the selected range changes. */
  onChange?: () => void;
}

export interface TrimController {
  /** Set the media duration; resets the range to the full clip. */
  setDuration(duration: number): void;
  isEnabled(): boolean;
  /** The selected range, or null when trimming is disabled. */
  getRange(): { start: number; end: number } | null;
}

export function createTrimController(opts: TrimControllerOptions): TrimController {
  const { media, enable, controlsGroup, startInput, endInput, startLabel, endLabel, selectionBar, onChange } = opts;
  let duration = 0;
  let isDragging = false;

  function updateVisuals(startVal: number, endVal: number) {
    startLabel.textContent = `${startVal.toFixed(2)}s`;
    endLabel.textContent = `${endVal.toFixed(2)}s`;
    if (duration) {
      selectionBar.style.left = `${(startVal / duration) * 100}%`;
      selectionBar.style.width = `${((endVal - startVal) / duration) * 100}%`;
    }
    onChange?.();
  }

  enable.addEventListener("change", () => {
    if (enable.checked) {
      controlsGroup.style.display = "block";
      media.pause();
      const startVal = parseFloat(startInput.value);
      updateVisuals(startVal, parseFloat(endInput.value));
      media.currentTime = startVal;
    } else {
      controlsGroup.style.display = "none";
      onChange?.();
    }
  });

  startInput.addEventListener("input", () => {
    isDragging = true;
    media.pause();
    let startVal = parseFloat(startInput.value);
    const endVal = parseFloat(endInput.value);
    if (startVal >= endVal) {
      startVal = Math.max(0, endVal - 0.05);
      startInput.value = String(startVal);
    }
    startInput.style.zIndex = "3";
    endInput.style.zIndex = "2";
    updateVisuals(startVal, endVal);
    media.currentTime = startVal;
  });

  endInput.addEventListener("input", () => {
    isDragging = true;
    media.pause();
    const startVal = parseFloat(startInput.value);
    let endVal = parseFloat(endInput.value);
    if (endVal <= startVal) {
      endVal = Math.min(duration, startVal + 0.05);
      endInput.value = String(endVal);
    }
    startInput.style.zIndex = "2";
    endInput.style.zIndex = "3";
    updateVisuals(startVal, endVal);
    media.currentTime = endVal;
  });

  [startInput, endInput].forEach((el) =>
    ["change", "mouseup", "touchend"].forEach((ev) =>
      el.addEventListener(ev, () => {
        isDragging = false;
      }),
    ),
  );

  // Keep playback within the selected window
  media.addEventListener("timeupdate", () => {
    if (!enable.checked || isDragging) return;
    const startVal = parseFloat(startInput.value);
    const endVal = parseFloat(endInput.value);
    if (media.currentTime >= endVal) {
      media.pause();
      media.currentTime = startVal;
    }
  });

  media.addEventListener("play", () => {
    if (!enable.checked) return;
    const startVal = parseFloat(startInput.value);
    const endVal = parseFloat(endInput.value);
    if (media.currentTime < startVal || media.currentTime >= endVal) {
      media.currentTime = startVal;
    }
  });

  return {
    setDuration(d: number) {
      duration = d;
      startInput.max = String(d);
      endInput.max = String(d);
      startInput.value = "0";
      endInput.value = String(d);
      updateVisuals(0, d);
    },
    isEnabled: () => enable.checked,
    getRange: () =>
      enable.checked ? { start: parseFloat(startInput.value), end: parseFloat(endInput.value) } : null,
  };
}
