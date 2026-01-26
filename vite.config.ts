import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "./", // important for Netlify
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // <-- makes @ work
    },
  },
  build: {
    outDir: "dist",
  },
});
