import type { FastifyPluginAsync } from 'fastify'

const exampleRoutes: FastifyPluginAsync = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })
}

export default exampleRoutes
