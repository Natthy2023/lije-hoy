import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  build: {
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      output: {
        // FIXED: Converted manualChunks from Object to Function
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Group i18n related packages
            if (
              id.includes('i18next') || 
              id.includes('i18next-browser-languagedetector')
            ) {
              return 'i18n';
            }
            
            // Group primary vendor packages
            if (
              id.includes('react') || 
              id.includes('framer-motion')
            ) {
              return 'vendor';
            }

            // Fallback for other node_modules
            return 'vendor-others';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },

  server: {
    // Note: Vite server usually handles compression via middleware
    // but keeping it here as per your original intent
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
