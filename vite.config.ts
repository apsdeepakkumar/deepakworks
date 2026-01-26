import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // crucial for Netlify deployment; makes all asset paths relative
  build: {
    outDir: 'dist',  // your production folder
  },
})
