import type { FastifyPluginAsync } from 'fastify'
import { add } from 'shared';
import { subtract, multiply, divide } from 'src/logic/examples/math.js';

const mathRoutes: FastifyPluginAsync = async function (fastify, _opts) {
  fastify.get<{ Params: { a: string; b: string } }>('/add/:a/:b', async function (request, _reply) {
    const { a, b } = request.params;
    return { result: add(Number(a), Number(b)) };
  });
  
  fastify.get<{ Querystring: { a: string; b: string } }>('/sub', async function (request, _reply) {
    const { a, b } = request.query;
    return { result: subtract(Number(a), Number(b)) };
  });

  fastify.get<{ Params: { a: string; b: string } }>('/mult/:a/:b', async function (request, _reply) {
    const { a, b } = request.params;
    return { result: multiply(Number(a), Number(b)) };
  });

  fastify.get<{ Querystring: { a: string; b: string } }>('/div', async function (request, _reply) {
    const { a, b } = request.query;
    return { result: divide(Number(a), Number(b)) };
  });
  //
}

export default mathRoutes