import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = `/${env.APP_NAME || 'app'}/`;
  const port = Number.parseInt(env.VITE_DEV_FRONTEND_PORT) || 5173;
  const target = `http://localhost:${env.VITE_DEV_BACKEND_PORT}` || 'http://localhost:3000';
  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
      // dev-only middleware to redirect bare base path to trailing-slash variant
      {
        name: 'vite-plugin-trailing-slash',
        configureServer(server: any) {
          server.middlewares.use((req: any, res: any, next: any) => {
            const url = req.url || '';
            if (env.APP_NAME && url === `/${env.APP_NAME}`) {
              res.writeHead(301, { Location: `/${env.APP_NAME}/` });
              res.end();
              return;
            }
            next();
          });
        },
      }
    ],
    server: {
      host: true,
      port,
      proxy: {
        [`/${env.APP_NAME}/api`]: {
          target,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(new RegExp(`^/${env.APP_NAME}/api`), ''),
        },
      },
    },
    define: {
      'process.env.APP_NAME': JSON.stringify(env.APP_NAME),
    },
  };
});