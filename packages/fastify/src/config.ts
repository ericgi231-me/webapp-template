const env = (process.env.NODE_ENV || 'production').toLowerCase();
const isDev = env === 'development';
const port = Number(process.env.DEV_PORT ?? 3000);
export default { env, isDev, port };