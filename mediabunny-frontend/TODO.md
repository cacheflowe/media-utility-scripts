# MediaBunny Toolkit — TODO / Roadmap

Working list of planned work. Loosely ordered; not all required for a first release.

## Planned

- [ ] **Shared-component refactor (files are getting big).**
      `toolkitCore.ts` and `toolkitTemplate.ts` are large. Extract reusable pieces used across
      video/image/audio/batch:
      - A trim controller (video + audio duplicate the dual-slider + scrub + clamp logic).
      - A size-estimate helper.
      - A collapsible-panel / card markup helper, and per-workspace template fragments.
      - Consider splitting `toolkitTemplate.ts` into per-workspace template modules.

- [ ] **Extend batching to video + audio.**
      Batch currently covers images only (`src/imageBatchWorkflow.ts`). Add video/audio batch
      (sequential mediabunny conversions with shared settings, per-item progress).

- [ ] **UI sweep + prep for release.**
      - Verify light theme (not just dark) across every panel.
      - Accessibility: labels/roles on custom controls (crop overlay, tool radios), keyboard
        operability, focus states.
      - Responsive/container-query check at narrow embed widths (the component can be dropped
        into a small column).
      - Empty/error states (unsupported file, decode failure) reviewed and friendly.
      - Reconsider the global `console` tee — make it opt-in or clearly scoped for a drop-in
        component on a third-party page.
      - Tab `<title>`, favicon, and meta for the standalone site.
      - Version bump in `package.json`; decide hosting/deploy (see repo README discussion).
      - Progress UX: set `aria-busy="true"` on the output region while encoding, and show an
        indeterminate `<progress>` during init (before the first progress callback).

## Done

- [x] Renamed the web component to `<media-converter>` (with a deprecated `<mediabunny-toolkit>` alias).
- [x] Audio as a first-class media kind — audio workspace with player, metadata, trim, and transcode
      (MP3/M4A/Opus/WAV/FLAC), encodable-format filtering, and a size estimate (`src/audioWorkflow.ts`).
- [x] Shadow-DOM web component + standalone site from one shared core.
- [x] 3-column workflow layout (info | settings | output) with container queries.
- [x] Collapsible `<details>` settings panels (all start collapsed).
- [x] Context-aware hiding under Fast Copy (resize/encoding panels; audio limited to keep/drop).
- [x] Split Output Profile into Codec / Compression / Rotation / Resample panels.
- [x] Live output-size estimate (bitrate × duration; crop/trim/resize/fps aware) under the render button.
- [x] Spatial video cropping with draggable preview overlay (mediabunny native crop).
- [x] Console/logs styled as a collapsible card in the output column.
- [x] Image batching — drop multiple images to enter batch mode: shared format + downscale-only
      resize (preset fills an editable max-dimension), per-file queue, "Download all" as a single
      dependency-free ZIP (`src/imageBatchWorkflow.ts`, `src/zip.ts`).
- [x] Audio waveform — decoded via WebAudio, peaks drawn to a canvas with trim-selection dimming,
      a playhead, and click-to-seek.
- [x] Standardized settings-panel spacing across all workspaces via `.settings-stack`.
