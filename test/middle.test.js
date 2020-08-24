const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const {
  assert: { strictEqual },
} = require('chai');

describe('middle function', () => {
  it('should return middle of array if array length is odd', () => {
    strictEqual(middle([1, 2, 3]), 2);
  });

  it('should return ✅✅✅ Assertion Passed: actual === expected if array length is even', () => {
    strictEqual(
      assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]),
      '✅✅✅ Assertion Passed: 2,3 === 2,3'
    );
  });
});
