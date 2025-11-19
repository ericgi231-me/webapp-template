import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const appName = env.APP_NAME || 'app';
  const base = `/${appName}/`;
  const port = Number.parseInt(env.VITE_DEV_FRONTEND_PORT || '5173');
  const backendPort = env.VITE_DEV_BACKEND_PORT || '3000';
  const target = `http://localhost:${backendPort}`;
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
            if (url === `/${appName}`) {
              res.writeHead(301, { Location: `/${appName}/` });
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
        [`/${appName}/api`]: {
          target,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(new RegExp(`^/${appName}/api`), ''),
        },
      },
    },
    define: {
      'process.env.APP_NAME': JSON.stringify(appName),
    },
  };
});