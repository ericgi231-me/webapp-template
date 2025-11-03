import type { FastifyPluginAsync } from 'fastify'

const rootRoutes: FastifyPluginAsync = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true, message: 'Welcome to the API' }
  })
}

export default rootRoutes