import Fastify from 'fastify'
import app from './app.js'

// Define the Fastify server with appropriate logging configuration
const server = Fastify({
  logger: {
    level: process.env.LOG_LEVEL || 'info',
    ...(process.env.NODE_ENV !== 'production' && {
      transport: {
        target: 'pino-pretty',
        options: { colorize: true }
      }
    })
  }
});

// Register the main application plugin which loads all routes and plugins
await server.register(app);

// Start the server and listen on the specified port and host
const start = async () => {
  try {
    const port = Number(process.env.PORT) || 3000
    const host = process.env.HOST || '0.0.0.0'
    
    await server.listen({ port, host })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()