import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "./", // ensures assets work on Netlify
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src") // <-- crucial for Netlify
    },
  },
  build: {
    outDir: "dist",
  },
});
