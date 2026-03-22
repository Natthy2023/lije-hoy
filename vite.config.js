import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  build: {
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'react',
            'react-dom',
            'react-i18next',
            'framer-motion',
          ],
          'i18n': [
            'i18next',
            'i18next-browser-languagedetector',
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },

  server: {
    compression: 'brotli',
  },

  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-i18next',
      'framer-motion',
      'react-intersection-observer',
      'zustand',
    ],
  },
})