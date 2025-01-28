import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import { splitVendorChunkPlugin } from 'vite';
import viteCompression from 'vite-plugin-compression';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-transform-react-remove-prop-types',
          '@babel/plugin-transform-react-constant-elements'
        ],
      },
    }),
    splitVendorChunkPlugin(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
    }),
    viteCompression({
      algorithm: 'gzip',
      threshold: 10240,
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
    devSourcemap: false,
    modules: {
      generateScopedName: '[hash:base64:5]',
    },
  },
  build: {
    sourcemap: true,
    minify: 'terser',
    cssMinify: 'lightningcss',
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor-react';
            }
            if (id.includes('lodash') || id.includes('ramda')) {
              return 'vendor-utils';
            }
            return 'vendor';
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
      treeshake: {
        preset: 'recommended',
        moduleSideEffects: 'no-external',
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
      },
      format: {
        comments: false,
      },
    },
  },
  esbuild: {
    legalComments: 'none',
    target: 'es2022',
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@headlessui/react',
      'react-intersection-observer',
    ],
    exclude: ['js-big-decimal'],
  },
  server: {
    preTransformRequests: true,
  },
});