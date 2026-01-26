import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "./", // important for Netlify so assets work
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src") // <- makes @/ point to src/
    },
  },
  build: {
    outDir: "dist",
  },
});
