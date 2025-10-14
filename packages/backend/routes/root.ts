import type { FastifyPluginAsync } from 'fastify'
import { add } from 'shared';

const rootRoutes: FastifyPluginAsync = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true, message: 'Welcome to the API', add: add(1, 2)}
  })
}

export default rootRoutes