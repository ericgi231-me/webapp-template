import fp from 'fastify-plugin'
import type { FastifyPluginAsync } from 'fastify'

const supportPlugin: FastifyPluginAsync = async function (fastify, _opts) {
  fastify.decorate('someSupport', function () {
    return 'hugs'
  })
}

export default fp(supportPlugin)
