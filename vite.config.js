import { fileURLToPath, URL } from "node:url";
import path from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import bundleScss from "rollup-plugin-bundle-scss";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      name: "Deposits Patterns v0.0.0",
      fileName: (format) => `deposits-patterns-vue.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "vue-router", "@deposits/ui-kit-vue"],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: "Vue",
          "vue-router": "$router",
        },
      },
    },
  },

  plugins: [vue(), bundleScss({ exclusive: false })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    dedupe: ["vue"],
  },
});
