import Fastify from 'fastify'
import app from './app.js'

const server = Fastify({
  logger: {
    ...(process.env.NODE_ENV !== 'production' && {
      transport: {
        target: 'pino-pretty',
        options: { colorize: true }
      }
    })
  }
});

await server.register(app);

const start = async () => {
  try {
    const port = Number(process.env.DEV_PORT) || 3000
    const host = '0.0.0.0'

    await server.listen({ port, host })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()