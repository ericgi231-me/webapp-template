import type { FastifyPluginAsync } from 'fastify'

const messageRoutes: FastifyPluginAsync = async function (fastify, opts) {
  fastify.get('/message', async function (request, reply) {
    return 'This is a message'
  })
}

export default messageRoutes
