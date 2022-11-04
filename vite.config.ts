import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  build: {
    minify: false,
    lib: {
      fileName: "index",
      entry: "./src/index.ts",
      formats: ["es"],
    },
  },
  plugins: [vanillaExtractPlugin(), cssInjectedByJsPlugin()],
});
