import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Unocss from "unocss/vite"
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: fileURLToPath(new URL('./src', import.meta.url)) + '/'
      },
      {
        find: /\/#\//,
        replacement: fileURLToPath(new URL('./types', import.meta.url)) + '/'
      }
    ],
  },
  plugins: [Unocss(), react()],
})
