import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// Three build targets:
//   npm run build            -> standalone static site (dist/), relative base
//                               so it works on any host or subpath (GitHub Pages,
//                               Vercel, a nested folder, etc.)
//   npm run build:component  -> single self-contained ES module (dist-component/)
//                               that registers the <media-converter> element.
//   npm run build:pages      -> single self-contained index.html, inlined JS/CSS,
//                               written to the repo root for GitHub Pages.
export default defineConfig(({ mode }) => {
  const isComponent = mode === "component";
  const isPages = mode === "pages";

  if (isPages) {
    return {
      base: "./",
      plugins: [viteSingleFile()],
      build: {
        outDir: "../",
        emptyOutDir: false,
        assetsInlineLimit: Infinity,
        cssCodeSplit: false,
        chunkSizeWarningLimit: 10000,
      },
    };
  }

  return {
    base: "./",
    build: isComponent
      ? {
          outDir: "dist-component",
          cssCodeSplit: false,
          lib: {
            entry: "src/component.ts",
            name: "MediaConverter",
            formats: ["es"],
            fileName: () => "media-converter.js",
          },
        }
      : {
          outDir: "dist",
        },
  };
});
