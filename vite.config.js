import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [react()],
  rules: [
    {
      test: /\.scss$/,
      use: [
        "style-loader", // Step3. Injects common JS to DOM
        "css-loader", // Step2. Turns CSS into common JS
        "sass-loader", // Step1. Turns SASS into valid CSS
      ],
    },
  ],
});
