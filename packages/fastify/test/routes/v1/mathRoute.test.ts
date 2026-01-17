import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { createTestApp } from '../../helper.js'

describe('Math Route Tests', () => {
  let app: Awaited<ReturnType<typeof createTestApp>>

  beforeEach(async () => {
    app = await createTestApp();
  });

  afterEach(async () => {
    if (app) await app.close();
  });

  it('should add two numbers', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/v1/add/5/10'
    });

    expect(response.statusCode).toBe(200);
    const jsonResponse = response.json();
    expect(jsonResponse).toHaveProperty('status', 'success');
    expect(jsonResponse).toHaveProperty('data', 15);
  });

    it('should subtract two numbers', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/v1/sub?num1=10&num2=5'
    });

    expect(response.statusCode).toBe(200);
    const jsonResponse = response.json();
    expect(jsonResponse).toHaveProperty('status', 'success');
    expect(jsonResponse).toHaveProperty('data', 5);
  });
})
