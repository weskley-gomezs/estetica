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
      outDir: 'dist', // Ensure output directory is standard for Vercel
    },
    define: {
      // Stringify the API key so it is inserted as a string literal in the client code
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      // Polyfill process.env to avoid "process is not defined" errors if other parts of the code access it
      'process.env': {}
    }
  }
})