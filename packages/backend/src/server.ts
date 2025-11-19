import Fastify from 'fastify'
import app from './app.js'

const isDev = process.env.NODE_ENV !== 'production'

const fastify = Fastify({
  logger: isDev ? {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname'
      }
    }
  } : {
    level: 'warn'
  },
  disableRequestLogging: !isDev,
  trustProxy: !isDev,
  bodyLimit: !isDev ? 1048576 : 10485760, // 1MB prod, 10MB dev
})

fastify.register(app)

const start = async (): Promise<void> => {
  try {
    const port = Number.parseInt(process.env.BACKEND_PORT || '5174');
    const host = '0.0.0.0'
    
    await fastify.listen({ port, host })
    console.log(`Server listening on http://${host}:${port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

process.on('SIGINT', async () => {
  try {
    await fastify.close()
    console.log('Server closed gracefully')
    process.exit(0)
  } catch (err) {
    console.error('Error during shutdown:', err)
    process.exit(1)
  }
})

start()