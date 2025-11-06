import type { FastifyPluginAsync } from 'fastify'

const rootRoutes: FastifyPluginAsync = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true, message: 'Welcome to the API' }
  })

  // Health check endpoint used by the Docker HEALTHCHECK
  fastify.get('/health', async function (request, reply) {
    return { status: 'ok' }
  })
}

export default rootRoutes