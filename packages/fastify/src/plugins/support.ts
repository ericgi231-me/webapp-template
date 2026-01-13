import fp from 'fastify-plugin'
import type { FastifyPluginAsync } from 'fastify'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface SupportPluginOptions {
  // Specify Support plugin options here
}

declare module 'fastify' {
  export interface FastifyInstance {
    someSupport(): string;
  }
}

/**
 * This is an example plugin that adds a simple method to the Fastify instance.
 */
const supportPlugin: FastifyPluginAsync<SupportPluginOptions> = async (fastify, _opts) => {
  fastify.decorate('someSupport', function () {
    return 'hugs'
  })
}

export default fp(supportPlugin)