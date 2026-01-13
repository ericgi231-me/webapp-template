import type { FastifyPluginAsync } from 'fastify'

const rest: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get('/', { 
    schema: {
      description: 'Welcome message endpoint',
      tags: ['Rest Example'],
      response: {
        200: {
          type: 'object',
          properties: {
            status: { type: 'string' },
            message: { type: 'string' }
          }
        }
      }
    }}, 
    async (_request, _reply) => {
      const status = 'success';
      const message = 'Welcome to the REST API!';
      return { status, message };
    }
  );

  fastify.get('/add/:num1/:num2', {
    schema: {
      description: 'Add two numbers using params',
      tags: ['Rest Example'],
      params: {
        type: 'object',
        properties: {
          num1: { type: 'number' },
          num2: { type: 'number' }
        },
        required: ['num1', 'num2']
      },
      response: {
        200: {
          type: 'object',
          properties: {
            status: { type: 'string' },
            data: { type: 'number' }
          }
        }
      }
    }},
    async (request, _reply) => {
      const status = 'success';
      const { num1, num2 } = request.params as { num1: number, num2: number };
      const sum = num1 + num2;
      return { status, data: sum };
    }
  );

  fastify.get('/sub', {
    schema: {
      description: 'Subtract two numbers using query params',
      tags: ['Rest Example'],
      querystring: {
        type: 'object',
        properties: {
          num1: { type: 'number' },
          num2: { type: 'number' }
        },
        required: ['num1', 'num2']
      },
      response: {
        200: {
          type: 'object',
          properties: {
            status: { type: 'string' },
            data: { type: 'number' }
          }
        }
      }
    }},
    async (request, _reply) => {
      const status = 'success';
      const { num1, num2 } = request.query as { num1: number, num2: number };
      const difference = num1 - num2;
      return { status, data: difference };
    }
  );
}

export default rest
