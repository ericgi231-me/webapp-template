import type { FastifyPluginAsync } from 'fastify';
import { add } from 'shared';

const rootRoutes: FastifyPluginAsync = async function (fastify, opts) {
  fastify.get<{ Params: { a: string; b: string } }>('/add/:a/:b', async function (request, reply) {
    const { a, b } = request.params;
    return { result: add(Number(a), Number(b)) };
  });
};

export default rootRoutes;