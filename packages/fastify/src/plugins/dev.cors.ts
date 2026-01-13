import fp from 'fastify-plugin'
import cors from '@fastify/cors'
import type { FastifyInstance, FastifyPluginAsync } from 'fastify'

/**
 * Enable CORS for development to allow Swagger UI testing from Vite dev server
 * Not needed in production (nginx handles same-origin)
 *
 * @see https://github.com/fastify/fastify-cors
 */
const corsPlugin: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  await fastify.register(cors, {
    origin: true, // Allow all origins in dev
    credentials: true
  })
}

export default fp(corsPlugin);
