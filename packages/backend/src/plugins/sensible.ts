import fp from 'fastify-plugin'
import sensible from '@fastify/sensible'
import type { FastifyPluginAsync } from 'fastify'

/**
 * This plugin adds some utilities to handle http errors
 * @see https://github.com/fastify/fastify-sensible
 */
const sensiblePlugin: FastifyPluginAsync = async function (fastify, opts) {
  await fastify.register(sensible)
}

export default fp(sensiblePlugin)
