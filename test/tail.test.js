const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');
const {
  assert: { strictEqual },
} = require('chai');

describe('tail function', () => {
  it('shold return ✅✅✅ Assertion Passed: actual === expected', () => {
    strictEqual(
      assertArraysEqual(tail([1, 2, 3]), [2, 3]),
      '✅✅✅ Assertion Passed: 2,3 === 2,3'
    );
  });
});
