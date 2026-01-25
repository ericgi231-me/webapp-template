import Fastify from 'fastify'
import app from './app.js'
import config from './config.js'

const fastify = Fastify({
  logger: config.isDev
    ? {
        transport: {
          target: 'pino-pretty',
          options: { colorize: true }
        }
      }
    : true
})

await fastify.register(app);

const start = async () => {
  try {
    await fastify.listen({ port: config.port, host: '0.0.0.0' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()