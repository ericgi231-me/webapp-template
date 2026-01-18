import type { FastifyPluginAsync } from 'fastify'

const mathRoute: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get('/add/:num1/:num2', (request, _reply) => {
    const { num1, num2 } = request.params as { num1: number, num2: number };
    return { status: 'success', data: Number(num1) + Number(num2)};
  });
  
  fastify.get('/sub', (request, _reply) => {
    const { num1, num2 } = request.query as { num1: number, num2: number };
    return { status: 'success', data: Number(num1) - Number(num2)};
  });
}

export default mathRoute;