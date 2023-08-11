import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Unocss from "unocss/vite"
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig((configEnv:ConfigEnv) => {
  const env = loadEnv(configEnv.mode, process.cwd())
  return {
    server: {
      port: 8000,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/api`), ''),
        }
      }
    },
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
  }
}
)
