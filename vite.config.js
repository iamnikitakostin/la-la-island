import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
      deleteOriginFile: false,
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
      deleteOriginFile: false,
    }),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
    // Optimize CSS
    devSourcemap: false,
    modules: {
      scopeBehavior: 'local',
      generateScopedName: '[hash:base64:5]',
    },
  },
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // Add other large dependencies here
        },
        // Customize chunk naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Reduce build size
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    // Optimize dependencies
    commonjsOptions: {
      include: [/node_modules/],
      extensions: ['.js', '.cjs'],
      strictRequires: true,
      transformMixedEsModules: true,
    },
    // Enable build cache
    cache: true,
    // Improve initial page load
    reportCompressedSize: false,
  },
  server: {
    // Enable HTTP2
    https: true,
    // Enable file compression
    cors: true,
    // Enable HMR
    hmr: {
      overlay: true,
    },
  },
  // Enable dependency optimization
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['@vite/client', '@vite/env'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  // Enable asset optimization
  assetsInclude: ['**/*.{png,jpg,gif,svg,webp,woff,woff2,eot,ttf,otf}'],
  // Enable caching
  cacheDir: '.vite',
});