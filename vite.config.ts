import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2022",
  },
  server: {
    proxy: {
      "/api": "http://localhost:8000",
    },
  },
});
