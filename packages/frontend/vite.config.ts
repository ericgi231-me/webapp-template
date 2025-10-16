import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import path from 'path'
// import { fileURLToPath } from 'url'

// get __dirname in ESM
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = env.VITE_BASE || '/'
  //const target = env.VITE_API_URL || 'http://localhost:3000';
  return {
  // resolve: {
  //   alias: {
  //     'shared': path.resolve(__dirname, '../shared/src/index.ts')
  //   }
  // },
  base,
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}})
