import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Optimizaciones de build
    target: 'es2020',
    modulePreload: { polyfill: false },
    cssCodeSplit: true,
    reportCompressedSize: false,
    minify: 'terser',
    rollupOptions: {
      treeshake: 'recommended',
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animation: ['gsap', '@gsap/react'],
          motion: ['framer-motion'],
          icons: ['lucide-react'],
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Configuración de assets
    assetsInlineLimit: 4096, // Inline assets menores a 4KB
    chunkSizeWarningLimit: 1000,
  },
  // Optimizaciones de desarrollo
  server: {
    hmr: {
      overlay: false,
    },
  },
  // Cabeceras de caché para preview local (producción depende del hosting)
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
  // Optimización de dependencias
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'gsap', 'framer-motion', 'lucide-react'],
  },
})
