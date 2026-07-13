# 🐰 MediaBunny Media Toolkit

A **100% in-browser** media converter for video and images. Nothing is uploaded
to a server — all decoding, transcoding, resizing, cropping, and redaction runs
locally in the browser via [MediaBunny](https://github.com/Vanilagy/mediabunny)
on top of the native **WebCodecs** API.

Features:

- **Video**: transcode (MP4/WebM, H.264/HEVC/VP9/VP8/AV1), trim, resize, rotate,
  frame-rate resampling (frame-repeat or bidirectional blending), audio
  transcode/copy/strip, quality/bitrate control, fast-copy (no re-encode) trims.
- **Image**: crop (drag handles), resize/scale presets, redaction brush
  (blur / pixelate / solid), format + quality export (JPEG/PNG/WebP/AVIF).
- Live side-by-side original/output comparison and a verbose diagnostics console.
- Light/dark theme.

## Two ways to ship it

The exact same UI and logic build into **two targets** from one shared codebase:

1. **Standalone site** (`dist/`) — a normal static site you can host anywhere.
2. **Web component** (`dist-component/media-converter.js`) — a single,
   fully self-contained, shadow-DOM-isolated `<media-converter>` element you
   can drop into any page.

### Architecture

| File | Role |
|---|---|
| `src/toolkitTemplate.ts` | The UI markup (one shared HTML string). **Edit the UI here.** |
| `src/toolkitCore.ts` | All behavior: `mountToolkit(root, { themeElement })`, scoped to whatever root it's given (a `Document` or a `ShadowRoot`). |
| `src/imageWorkflow.ts` | Image crop/redact/export workflow (also root-scoped). |
| `src/style.css` | Styles (imports Pico CSS). |
| `src/main.ts` | **Standalone entry** — injects the markup into the page, mounts on `document`. |
| `src/component.ts` | **Web-component entry** — defines `<media-converter>`, mounts inside a shadow root with Pico's `:root` tokens rescoped to `:host`. |

Because the core queries a passed-in `root` and both `Document` and `ShadowRoot`
implement `getElementById`, the identical wiring runs in both targets.

## Develop

```bash
npm install
npm run dev        # Vite dev server for the standalone site
```

## Build

```bash
npm run build            # -> dist/            standalone static site
npm run build:component  # -> dist-component/  single-file web component
npm run build:all        # both
```

The standalone build uses a **relative base** (`./assets/...`), so `dist/` works
from any host or subpath (GitHub Pages project pages, Vercel, a nested folder,
etc.) with no config change.

## Embedding the web component

After `npm run build:component`, copy `dist-component/media-converter.js` to
your site and add:

```html
<script type="module" src="/path/to/media-converter.js"></script>

<media-converter></media-converter>
```

That's it. The component:

- Is **style-isolated in both directions** via shadow DOM — the host page's CSS
  can't leak in, and Pico can't leak out.
- Bundles everything (MediaBunny, Pico, all CSS) into the one JS file — no extra
  assets, no build step on the host side.
- Is **responsive to its own width** (CSS container queries), so it lays out
  correctly even inside a narrow host column.
- Accepts an optional initial theme: `<media-converter theme="light">`
  (the saved/OS preference then takes over).
- Also registers a deprecated `<mediabunny-toolkit>` alias for backwards
  compatibility.

See `component-demo.html` for a working example that embeds the component in a
deliberately clashing host page to demonstrate the isolation.

> **Note:** the toolkit taps into `console.log/warn/error` to feed its in-UI
> diagnostics panel (installed once, fans out to every mounted instance). It
> always forwards to the real console too.

## Layout

Once media is loaded, the UI is a three-column workflow that collapses
gracefully as the component narrows:

**Column 1 — Input / Info** (preview + metadata) → **Column 2 — Settings**
(conversion controls) → **Column 3 — Output** (render button, size estimate,
progress, download, and the collapsible diagnostics console).

---

## Roadmap

Planned work and completed milestones are tracked in [TODO.md](TODO.md).
