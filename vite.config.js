import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import legacy from '@vitejs/plugin-legacy';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'], // Ensures compatibility with modern browsers
    }),
    viteCompression(), // Enables gzip compression for assets
    visualizer({ open: false }) // Bundle analysis (open report manually)
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    assetsDir: 'assets',
    target: 'esnext',
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('framer-motion')) {
              return 'react-vendor'; // Separate chunk for React-related dependencies
            }
            return 'vendor'; // General vendor chunk
          }
        },
      },
    },
    minify: 'esbuild', // Faster than terser
    chunkSizeWarningLimit: 500, // Lowered for better tracking
    assetsInlineLimit: 8192, // Inline assets up to 8KB
  },
  server: {
    open: true,
    strictPort: true, // Ensures the app fails fast if the port is occupied
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'], // Pre-bundles these dependencies
  },
});
