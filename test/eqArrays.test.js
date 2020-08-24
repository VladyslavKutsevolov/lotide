const eqArrays = require('../eqArrays');
const {
  assert: { strictEqual },
} = require('chai');

describe('eqArray function', () => {
  it('shoul return true if arrays are the same', () => {
    strictEqual(eqArrays([[2, [3]], [4]], [[2, [3]], [4]]), true);
  });

  it('shoul return false if arrays are different', () => {
    strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});
