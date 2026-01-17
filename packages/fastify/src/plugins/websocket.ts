import fp from 'fastify-plugin'
import websocket from '@fastify/websocket'
import type { FastifyPluginAsync } from 'fastify'

/**
 * This plugin adds WebSocket support to the Fastify server using the @fastify/websocket package.
 * Type augmentations are provided by @fastify/websocket automatically.
 */
const websocketPlugin: FastifyPluginAsync = async (fastify, _opts) => {
  await fastify.register(websocket);
}

export default fp(websocketPlugin)
