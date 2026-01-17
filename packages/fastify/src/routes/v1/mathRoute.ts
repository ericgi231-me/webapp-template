import type { FastifyPluginAsync, RouteHandlerMethod } from 'fastify'
import { AddParamsSchema, MathResponseSchema, SubQuerySchema } from '../../schemas/mathSchema.js';

const mathRoute: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  const addHandler: RouteHandlerMethod = (request, _reply) => {
    const status = 'success';
    const { num1, num2 } = request.params as { num1: number, num2: number };
    const sum = num1 + num2;
    return { status, data: sum };
  }

  const subHandler: RouteHandlerMethod = (request, _reply) => {
    const status = 'success';
    const { num1, num2 } = request.query as { num1: number, num2: number };
    const difference = num1 - num2;
    return { status, data: difference };
  }

  fastify.get('/add/:num1/:num2', {
    schema: {
      params: AddParamsSchema,
      response: { 200: MathResponseSchema }
    }
  }, addHandler)
  
  fastify.get('/sub', {
    schema: {
      query: SubQuerySchema,
      response: { 200: MathResponseSchema }
    }
  }, subHandler);
}

export default mathRoute
