import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  build: {
    chunkSizeWarningLimit: 1000, // increase warning limit to 1MB
    rollupOptions: {
      output: {
        // split node_modules into a vendor chunk
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})
