// Reusable dual-handle trim controller. Drives two overlapping range inputs, a
// selection bar, value labels, and scrubs/clamps a media element. Shared by the
// video and audio workspaces.
//
// Optionally supports multiple sections: pass `sectionList` + `addSectionButton`
// and the handles edit the active section while the others show as ghost bars.
// Exported sections are concatenated in chronological order.

export interface TrimRange {
  start: number;
  end: number;
}

export interface TrimControllerOptions {
  media: HTMLMediaElement;
  enable: HTMLInputElement;
  controlsGroup: HTMLElement;
  startInput: HTMLInputElement;
  endInput: HTMLInputElement;
  startLabel: HTMLElement;
  endLabel: HTMLElement;
  selectionBar: HTMLElement;
  /** Multi-section UI (optional): list of sections, add button, total-duration label. */
  sectionList?: HTMLElement;
  addSectionButton?: HTMLButtonElement;
  totalLabel?: HTMLElement;
  /** Fired when the enable state or the selected range changes. */
  onChange?: () => void;
}

export interface TrimController {
  /** Set the media duration; resets to a single full-clip section. */
  setDuration(duration: number): void;
  isEnabled(): boolean;
  /** The active section's range, or null when trimming is disabled. */
  getRange(): TrimRange | null;
  /** All sections, sorted and with overlaps merged, or null when trimming is disabled. */
  getRanges(): TrimRange[] | null;
}

const MIN_LEN = 0.05;

/** Sort ranges by start and merge any that overlap or touch. */
export function mergeRanges(ranges: TrimRange[]): TrimRange[] {
  const sorted = ranges.map((r) => ({ ...r })).sort((a, b) => a.start - b.start);
  const merged: TrimRange[] = [];
  for (const r of sorted) {
    const last = merged[merged.length - 1];
    if (last && r.start <= last.end) last.end = Math.max(last.end, r.end);
    else merged.push(r);
  }
  return merged;
}

export function createTrimController(opts: TrimControllerOptions): TrimController {
  const { media, enable, controlsGroup, startInput, endInput, startLabel, endLabel, selectionBar, onChange } = opts;
  const { sectionList, addSectionButton, totalLabel } = opts;
  let duration = 0;
  let isDragging = false;

  let sections: TrimRange[] = [{ start: 0, end: 0 }];
  let active = sections[0];
  const ghostBars: HTMLElement[] = [];
  const visualizer = selectionBar.parentElement!;

  const chronological = () => [...sections].sort((a, b) => a.start - b.start);

  function renderGhosts() {
    ghostBars.forEach((g) => g.remove());
    ghostBars.length = 0;
    if (!duration) return;
    for (const s of sections) {
      if (s === active) continue;
      const g = document.createElement("div");
      g.className = "trim-ghost";
      g.style.left = `${(s.start / duration) * 100}%`;
      g.style.width = `${((s.end - s.start) / duration) * 100}%`;
      visualizer.insertBefore(g, selectionBar);
      ghostBars.push(g);
    }
  }

  function renderList() {
    if (!sectionList) return;
    sectionList.innerHTML = "";
    chronological().forEach((s, i) => {
      const row = document.createElement("li");
      row.className = "trim-section-row" + (s === active ? " active" : "");

      const pick = document.createElement("button");
      pick.type = "button";
      pick.className = "trim-section-pick";
      pick.textContent = `${i + 1}. ${s.start.toFixed(2)}s – ${s.end.toFixed(2)}s (${(s.end - s.start).toFixed(2)}s)`;
      pick.addEventListener("click", () => selectSection(s));

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "trim-section-remove";
      remove.textContent = "✕";
      remove.title = "Remove section";
      remove.disabled = sections.length <= 1;
      remove.addEventListener("click", () => removeSection(s));

      row.append(pick, remove);
      sectionList.append(row);
    });
    if (totalLabel) {
      const total = mergeRanges(sections).reduce((sum, r) => sum + (r.end - r.start), 0);
      totalLabel.textContent = `${total.toFixed(2)}s`;
    }
  }

  function updateVisuals(startVal: number, endVal: number) {
    startLabel.textContent = `${startVal.toFixed(2)}s`;
    endLabel.textContent = `${endVal.toFixed(2)}s`;
    if (duration) {
      selectionBar.style.left = `${(startVal / duration) * 100}%`;
      selectionBar.style.width = `${((endVal - startVal) / duration) * 100}%`;
    }
    active.start = startVal;
    active.end = endVal;
    renderGhosts();
    renderList();
    onChange?.();
  }

  // Load the active section into the handles
  function syncInputs() {
    startInput.value = String(active.start);
    endInput.value = String(active.end);
    updateVisuals(active.start, active.end);
  }

  function selectSection(s: TrimRange) {
    active = s;
    syncInputs();
    media.pause();
    media.currentTime = s.start;
  }

  function removeSection(s: TrimRange) {
    if (sections.length <= 1) return;
    sections = sections.filter((x) => x !== s);
    if (active === s) active = chronological()[0];
    syncInputs();
  }

  // New section starts at the playhead (or after the section it lands in) and
  // runs for ~10% of the clip; the handles then fine-tune it.
  addSectionButton?.addEventListener("click", () => {
    if (!duration) return;
    let start = media.currentTime;
    for (const s of chronological()) {
      if (start >= s.start && start < s.end) start = s.end;
    }
    if (start > duration - MIN_LEN) start = 0;
    const end = Math.min(duration, start + Math.max(1, duration * 0.1));
    const section = { start, end };
    sections.push(section);
    selectSection(section);
  });

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
      startVal = Math.max(0, endVal - MIN_LEN);
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
      endVal = Math.min(duration, startVal + MIN_LEN);
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

  // Playback previews the edit: play each section in order, skipping the gaps,
  // then stop back at the first section.
  media.addEventListener("timeupdate", () => {
    if (!enable.checked || isDragging) return;
    const ranges = mergeRanges(sections);
    const t = media.currentTime;
    if (ranges.some((r) => t >= r.start && t < r.end)) return;
    const next = ranges.find((r) => r.start > t);
    if (next && !media.paused) {
      media.currentTime = next.start;
    } else {
      media.pause();
      media.currentTime = ranges[0].start;
    }
  });

  media.addEventListener("play", () => {
    if (!enable.checked) return;
    const ranges = mergeRanges(sections);
    const t = media.currentTime;
    if (!ranges.some((r) => t >= r.start && t < r.end)) {
      media.currentTime = (ranges.find((r) => r.start > t) ?? ranges[0]).start;
    }
  });

  return {
    setDuration(d: number) {
      duration = d;
      startInput.max = String(d);
      endInput.max = String(d);
      sections = [{ start: 0, end: d }];
      active = sections[0];
      syncInputs();
    },
    isEnabled: () => enable.checked,
    getRange: () => (enable.checked ? { start: active.start, end: active.end } : null),
    getRanges: () => (enable.checked ? mergeRanges(sections) : null),
  };
}
