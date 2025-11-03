import type { FastifyPluginAsync } from 'fastify';

const rootRoutes: FastifyPluginAsync = async function (fastify, opts) {
  fastify.get<{ Querystring: { a: string; b: string } }>('/sub', async function (request, reply) {
    const { a, b } = request.query;
    return { result: Number(a) - Number(b)};
  });
};

export default rootRoutes;