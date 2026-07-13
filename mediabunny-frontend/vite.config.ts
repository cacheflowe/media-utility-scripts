import { defineConfig } from "vite";

// Two build targets:
//   npm run build            -> standalone static site (dist/), relative base
//                               so it works on any host or subpath (GitHub Pages,
//                               Vercel, a nested folder, etc.)
//   npm run build:component  -> single self-contained ES module (dist-component/)
//                               that registers the <media-converter> element.
export default defineConfig(({ mode }) => {
  const isComponent = mode === "component";

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
