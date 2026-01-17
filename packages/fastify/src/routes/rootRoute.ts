import type { FastifyPluginAsync, RouteHandlerMethod } from 'fastify'

const rootRoute: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  const infoHandler: RouteHandlerMethod = (_request, _reply) => {
    return { root: true };
  }

  const healthHandler: RouteHandlerMethod = (_request, _reply) => {
    return {
      status: 'ok',
      timestamp: new Date().toISOString()
    };
  }
  
  fastify.get('/', infoHandler);
  fastify.get('/health', healthHandler);
}

export default rootRoute
