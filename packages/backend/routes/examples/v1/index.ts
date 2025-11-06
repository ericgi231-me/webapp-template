import type { FastifyPluginAsync } from 'fastify'
import { add } from 'shared';

const exampleRoutes: FastifyPluginAsync = async function (fastify, opts) {
  // Example root route with a simple string response
  fastify.get('/', async function (request, reply) {
    return 'This is an example api'
  })

  // Example add route using the shared add function and params
  fastify.get<{ Params: { a: string; b: string } }>('/add/:a/:b', async function (request, reply) {
    const { a, b } = request.params;
    return { result: add(Number(a), Number(b)) };
  });

  // Example sub route using query parameters
  fastify.get<{ Querystring: { a: string; b: string } }>('/sub', async function (request, reply) {
    const { a, b } = request.query;
    return { result: Number(a) - Number(b)};
  });
}

export default exampleRoutes
