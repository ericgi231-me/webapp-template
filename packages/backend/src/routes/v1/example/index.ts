import type { FastifyPluginAsync } from 'fastify'
import mathRoutes from './math.js'

const examplesRoutes: FastifyPluginAsync = async function (fastify, _opts) {
  fastify.register(mathRoutes, { prefix: '/math' })

  fastify.get('/', async function (_request, _reply) {
    return { root: true, message: 'This is an example API payload' }
  })
}

export default examplesRoutes