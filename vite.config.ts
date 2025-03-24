// vite.config.ts
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // rest of the configuration
  build: {
    minify: true,
    rollupOptions: {
      output: {
        preserveModules: true,
        inlineDynamicImports: false,
        compact: true,
      },
    },
    lib: {
      entry: resolve(__dirname, "src/web-components/index.ts"),
      fileName: "[name]",
      name: "EventEmitter",
      formats: ["es"],
    },
  },
});
