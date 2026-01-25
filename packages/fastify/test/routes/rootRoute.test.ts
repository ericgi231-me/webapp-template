import { describe, it, afterEach, beforeEach } from 'node:test'
import assert from 'node:assert'
import { createTestApp } from '../helper.js'

describe('Root Route Tests', () => {
  let app: Awaited<ReturnType<typeof createTestApp>>

  beforeEach(async () => {
    app = await createTestApp();
  });

  afterEach(async () => {
    if (app) await app.close();
  });

  it('should return root response', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/'
    });

    assert.strictEqual(response.statusCode, 200);
    const jsonResponse = response.json();
    assert.strictEqual(jsonResponse.name, 'Fastify API');
    assert.strictEqual(jsonResponse.version, '1.0.0');
    assert.strictEqual(jsonResponse.description, 'Full-stack web application template API');
  });

  it('should return health check response', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/health'
    });

    assert.strictEqual(response.statusCode, 200);
    const jsonResponse = response.json();
    assert.strictEqual(jsonResponse.status, 'ok');
    assert.ok('timestamp' in jsonResponse);
    assert.ok('uptime' in jsonResponse);
    assert.ok('environment' in jsonResponse);
    assert.strictEqual(typeof jsonResponse.uptime, 'number');
  });
})