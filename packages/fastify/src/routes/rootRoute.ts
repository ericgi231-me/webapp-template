import type { FastifyPluginAsync } from 'fastify'
import config from '../config.js';

const rootRoute: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get('/', (_request, _reply) => {
    return {
      name: 'Fastify API',
      version: '1.0.0',
      description: 'Full-stack web application template API'
    }
  });
  
  fastify.get('/health', (_request, _reply) => {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: config.env
    }
  });
}

export default rootRoute;