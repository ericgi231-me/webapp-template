import fp from 'fastify-plugin'
import websocket from '@fastify/websocket'
import type { FastifyPluginAsync } from 'fastify'

declare module 'fastify' {
  interface RouteShorthandOptions {
    websocket?: boolean
  }
}

/**
 * This plugin adds WebSocket support to the Fastify server using the @fastify/websocket package.
 */
const websocketPlugin: FastifyPluginAsync = async (fastify, _opts) => {
  await fastify.register(websocket);
}

export default fp(websocketPlugin)
