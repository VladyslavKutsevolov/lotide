const assertArraysEqual = require('../assertArraysEqual');
const {
  assert: { strictEqual, deepEqual },
} = require('chai');

describe('Assert Arrays Equal function', () => {
  it('should return ✅✅✅ Assertion Passed: actual === expected when passing nested array', () => {
    strictEqual(
      assertArraysEqual([[2, [3]], [4]], [[2, [3]], [4]]),
      '✅✅✅ Assertion Passed: 2,3,4 === 2,3,4'
    );
  });
});
