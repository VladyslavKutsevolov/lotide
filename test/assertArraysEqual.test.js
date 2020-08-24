const assertArraysEqual = require('../assertArraysEqual');

console.log(assertArraysEqual([[2, [3]], [4]], [[2, [3]], [4]])); // => true

console.log(
  assertArraysEqual(
    [[2, 3], [4]],
    [
      [2, 3],
      [4, 5],
    ]
  )
); // => false
console.log(assertArraysEqual([[2, 3], [4]], [[2, 3], 4])); // => false
