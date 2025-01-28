import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    assetsDir: 'assets',
    target: 'esnext', // Use modern JavaScript features
    outDir: 'dist', // Output directory
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Code-splitting for vendor files
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    minify: 'terser', // Minify JavaScript
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    chunkSizeWarningLimit: 600,
    assetsInlineLimit: 4096, // Inline small assets to reduce HTTP requests
  },
  server: {
    open: true, // Automatically open the app in the browser
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Pre-bundling important dependencies
  },
});