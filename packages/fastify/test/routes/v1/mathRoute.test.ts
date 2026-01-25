import { describe, it, afterEach, beforeEach } from 'node:test'
import assert from 'node:assert'
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

    assert.strictEqual(response.statusCode, 200);
    const jsonResponse = response.json();
    assert.strictEqual(jsonResponse.status, 'success');
    assert.strictEqual(jsonResponse.data, 15);
  });

  it('should subtract two numbers', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/v1/sub?num1=10&num2=5'
    });

    assert.strictEqual(response.statusCode, 200);
    const jsonResponse = response.json();
    assert.strictEqual(jsonResponse.status, 'success');
    assert.strictEqual(jsonResponse.data, 5);
  });
})