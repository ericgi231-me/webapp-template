import type { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get('/', {
    schema: {
      description: 'Root endpoint',
      tags: ['Root'],
      response: {
        200: {
          type: 'object',
          properties: {
            root: { type: 'boolean' }
          }
        }
      }
    }},
    async (_request, _reply) => {
      return { root: true }
    }
  );

  fastify.get('/health', {
    schema: {
      description: 'Health check endpoint',
      tags: ['Root'],
      response: {
        200: {
          type: 'object',
          properties: {
            status: { type: 'string' },
            timestamp: { type: 'string' }
          }
        }
      }
    }},
    async (_request, _reply) => {
      return {
        status: 'ok',
        timestamp: new Date().toISOString()
      }
    }
  );
}

export default root
