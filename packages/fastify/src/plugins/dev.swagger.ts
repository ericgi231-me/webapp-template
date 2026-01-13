import fp from 'fastify-plugin'
import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui'
import type { FastifyInstance, FastifyPluginAsync } from 'fastify'

/**
 * This plugin provides automatic API documentation using Swagger/OpenAPI
 * Only loaded in development mode (see app.ts ignorePattern)
 *
 * @see https://github.com/fastify/fastify-swagger
 */
const swaggerPlugin: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  const port = process.env.PORT || 3000
  const host = process.env.HOST || 'localhost'
  
  await fastify.register(swagger, {
    openapi: {
      info: {
        title: 'Webapp Template API',
        description: 'API documentation for Fastify backend',
        version: '1.0.0'
      },
      servers: [
        {
          url: `http://${host}:${port}`,
          description: 'Development server'
        }
      ]
    }
  })

  await fastify.register(swaggerUI, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false
    }
  })
}

export default fp(swaggerPlugin)