import { describe, it, expect, afterEach, beforeEach } from 'vitest'
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

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ root: true });
  });

  it('should return health check response', async () => {

    const response = await app.inject({
      method: 'GET',
      url: '/health'
    });

    expect(response.statusCode).toBe(200);
    const jsonResponse = response.json();
    expect(jsonResponse).toHaveProperty('status', 'ok');
    expect(jsonResponse).toHaveProperty('timestamp');
  });
})
