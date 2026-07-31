import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    // Modern baseline: no legacy transpilation or polyfills to ship and parse.
    target: 'es2020',
    rollupOptions: {
      output: {
        // Dependencies change far less often than the site does, so keeping
        // them in their own chunk lets returning visitors reuse it across
        // deploys instead of re-downloading React on every content edit.
        manualChunks: (id) => (id.includes('node_modules') ? 'vendor' : undefined)
      }
    }
  }
})
