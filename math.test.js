import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { add } from './math.js';

test('add returns the sum', () => {
  assert.equal(add(2, 3), 5);
});
