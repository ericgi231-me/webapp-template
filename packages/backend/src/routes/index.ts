import type { FastifyPluginAsync } from 'fastify'

const rootRoutes: FastifyPluginAsync = async function (fastify, _opts) {
  fastify.get('/', async function (_request, _reply) {
    return { root: true, message: 'Welcome to the API' }
  })

  fastify.get('/health', async function (_request, _reply) {
    return { status: 'ok' }
  })
}

export default rootRoutes