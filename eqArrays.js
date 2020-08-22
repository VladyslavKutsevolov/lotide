const assertEqual = (actual, expected) => {
  return actual === expected
    ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    return arr1.every((val, i) => {
      if (Array.isArray(val) || Array.isArray(arr2[i])) {
        return eqArrays(val, arr2[i]) === false;
      } else {
        val === arr2[i];
      }
    });
  }
};

// console.log(eqArrays([[2, [3]], [4]], [[2, [3]], [4]])); // => true

// console.log(
//   eqArrays(
//     [[2, 3], [4]],
//     [
//       [2, 3],
//       [4, 5],
//     ]
//   )
// ); // => false
// console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
