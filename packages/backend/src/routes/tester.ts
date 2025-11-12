import type { FastifyPluginAsync } from 'fastify'

const testerRoutes: FastifyPluginAsync = async function (fastify, opts) {
  fastify.get('/cat', async function (request, reply) {
    return { root: true, message: 'Welcome to the API' }
  })

  fastify.get('/dog', async function (request, reply) {
    return { status: 'ok' }
  })
}

export default testerRoutes