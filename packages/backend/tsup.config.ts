import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/server.ts'],
  format: ['esm'],
  target: 'node20',
  platform: 'node',
  sourcemap: true,
  clean: true,
  bundle: true,
  // Don't bundle dependencies - they'll be in node_modules
  external: [
    'fastify',
    '@fastify/autoload',
    '@fastify/sensible',
    'fastify-plugin',
    'shared'
  ],
  // Preserve dynamic imports for fastify autoload
  splitting: false,
  treeshake: true,
});
