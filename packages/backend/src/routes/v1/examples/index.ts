import type { FastifyPluginAsync } from 'fastify'
import mathRoutes from './math.js'

const examplesRoutes: FastifyPluginAsync = async function (fastify, opts) {
  fastify.register(mathRoutes, { prefix: '/math' })

  fastify.get('/', async function (request, reply) {
    return { root: true, message: 'Welcome to the API' }
  })

  fastify.get('/health', async function (request, reply) {
    return { status: 'ok' }
  })
}

export default examplesRoutes