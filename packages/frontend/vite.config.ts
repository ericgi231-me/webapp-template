import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = `/${env.APP_NAME}/` || '/app/'
  const port = Number.parseInt(env.VITE_DEV_FRONTEND_PORT) || 5173
  const target = `http://localhost:${env.VITE_DEV_BACKEND_PORT}` || 'http://localhost:3000'
  return {
  base,
  plugins: [react()],
  server: {
    host: true,
    port,
    proxy: {
      '/api': {
        target,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}})
