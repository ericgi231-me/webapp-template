import { dirname, join } from 'node:path'
import AutoLoad from '@fastify/autoload'
import type { FastifyPluginAsync } from 'fastify'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts,
    ignorePattern: process.env.NODE_ENV === 'production' ? /^dev\./ : undefined
  })

  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: opts
  })
}

export default app