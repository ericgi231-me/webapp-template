import { test } from 'node:test';
import assert from 'node:assert';
import { build } from '../helper.js';

test('add 1 + 2', async (t) => {
  const app = await build(t);

  const res = await app.inject({
    url: '/add/1/2'
  });

  const payload = JSON.parse(res.payload);
  assert.equal(payload.result, 3);
});