# MediaBunny Toolkit — TODO / Roadmap

Working list of planned work. Loosely ordered; not all required for a first release.

## Planned

- [ ] **Audio batching.**
      Batch now covers images + video. Add audio batch (sequential conversions, shared
      format/bitrate settings) on the same `batchShared` engine.

- [ ] **Further refactor (optional).**
      Not yet extracted: a size-estimate helper, a collapsible-panel/card markup helper, and
      splitting the large `toolkitTemplate.ts` into per-workspace template fragments.

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
- [x] Clipboard paste support — pasting an image (e.g. a screenshot) anywhere on the page feeds
      it into the same load/batch pipeline as drag-and-drop.
- [x] Lightweight Base64 PNG — image workspace has a "Copy Lightweight Base64 PNG" action that
      quantizes the current crop/redaction/resize result to an indexed-color PNG (`upng-js`,
      selectable palette size) and copies an `<img>` tag straight to the clipboard.
- [x] Shared-component refactor: `src/shared.ts` (formatters, quality maps, codec/format builders),
      `src/trimController.ts` (video + audio share the dual-handle trim), and `src/batchShared.ts`
      (generic queue/zip/thumbnail engine that both image and video batch build on).
- [x] Video batching — drop multiple videos: shared codec/quality/resize (downscale-only) + remove-audio,
      first-frame thumbnails, per-file conversion progress, ZIP download-all (`src/videoBatchWorkflow.ts`).
