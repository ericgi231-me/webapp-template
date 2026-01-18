import Fastify, { type FastifyInstance } from 'fastify'
import app from '../src/app.js'

/**
 * Creates and returns a Fastify instance for testing purposes.
 * Use inject() method to simulate HTTP requests without starting a real server.
 * @returns {Promise<FastifyInstance>} A promise that resolves to a Fastify instance
 */
export async function createTestApp(): Promise<FastifyInstance> {
  const fastify = Fastify({
    logger: false
  });

  await fastify.register(app);
  await fastify.ready();

  return fastify;
}
