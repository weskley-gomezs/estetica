import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Externaliza dependências para usar as versões do CDN definidas no index.html
      // Removemos 'globals' para que o build gere imports ESM padrão (import React from 'react')
      // que o navegador resolverá automaticamente usando o importmap.
      external: [
        'react',
        'react-dom',
        'react-dom/client',
        'react-router-dom',
        'lucide-react'
      ]
    }
  }
})