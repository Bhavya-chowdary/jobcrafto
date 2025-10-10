import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false,
    proxy: {
      '/api': {
        target: 'http://localhost:2005',
        changeOrigin: true,
        secure: false,
        // remove /api prefix if backend doesn't expect it
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
