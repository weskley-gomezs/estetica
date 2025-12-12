import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
    },
    define: {
      // Safely replace process.env.API_KEY with string value or empty string
      'process.env.API_KEY': JSON.stringify(env.API_KEY || ''),
      // Polyfill process.env.NODE_ENV for React
      'process.env.NODE_ENV': JSON.stringify(mode),
      // Fallback for other process.env accesses to avoid ReferenceError
      'process.env': {}
    }
  }
})