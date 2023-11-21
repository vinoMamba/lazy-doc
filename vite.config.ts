import { resolve } from 'node:path'
import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: `${resolve(process.cwd(), '.', 'src')}/`,
      },
    ],
  },
})
