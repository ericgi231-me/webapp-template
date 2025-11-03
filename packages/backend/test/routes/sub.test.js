import { test } from 'node:test';
import assert from 'node:assert';
import { build } from '../helper.js';

test('subtract 5 - 3', async (t) => {
  const app = await build(t);

  const res = await app.inject({
    url: '/sub?a=5&b=3'
  });

  const payload = JSON.parse(res.payload);
  assert.equal(payload.result, 2);
});