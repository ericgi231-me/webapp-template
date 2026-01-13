import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = Number(env.VITE_DEV_FRONTEND_PORT || 5173);
  const target = `http://localhost:${env.VITE_DEV_BACKEND_PORT || 3000}`;
  
  return {
    plugins: [
      react(), 
      tailwindcss()
    ],
    server: {
      host: true,
      port,
      proxy: {
        '/api': {
          target,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(new RegExp(`^/api`), ''),
        },
        '/docs': {
          target,
          changeOrigin: true,
          secure: false,
        },
      },
    }
  }
})
