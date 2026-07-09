import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // Served from https://<user>.github.io/Centro-de-Control/ on GitHub Pages.
  // Use the repo sub-path in production, root during local dev.
  base: process.env.NODE_ENV === "production" ? "/Centro-de-Control/" : "/",
  plugins: [react()],
  server: {
    port: 5173,
  },
});
