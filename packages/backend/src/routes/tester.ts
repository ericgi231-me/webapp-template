import type { FastifyPluginAsync } from 'fastify'

const testerRoutes: FastifyPluginAsync = async function (fastify, _opts) {
  fastify.get('/cat', async function (_request, _reply) {
    return { root: true, message: 'Welcome to the API' }
  })

  fastify.get('/dog', async function (_request, _reply) {
    return { status: 'ok' }
  })
}

export default testerRoutes