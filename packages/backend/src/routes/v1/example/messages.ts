import type { FastifyPluginAsync } from 'fastify'

const messageRoutes: FastifyPluginAsync = async function (fastify, _opts) {
  fastify.get('/message', async function (_request, _reply) {
    return 'This is a message'
  })
}

export default messageRoutes
