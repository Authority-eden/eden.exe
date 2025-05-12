import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/eden.exe/",
  plugins: [react()],
  build: {
    outDir: 'dist' // make sure this matches
  }
})
