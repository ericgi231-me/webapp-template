import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import AutoLoad from '@fastify/autoload'
import type { FastifyBaseLogger, FastifyInstance, FastifyPluginAsync, FastifyTypeProviderDefault, RawServerDefault } from 'fastify'
import type { IncomingMessage, ServerResponse } from 'node:http'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const options = {}

const app: FastifyPluginAsync = async function (
    fastify: FastifyInstance<RawServerDefault, IncomingMessage, ServerResponse<IncomingMessage>, FastifyBaseLogger, FastifyTypeProviderDefault>,
    opts: Record<never, never>) {
  await fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: {...opts}
  })

  await fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: {...opts}
  })
}

export default app
