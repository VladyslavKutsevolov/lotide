const assertEqual = (actual, expected) => {
  return actual === expected
    ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    return arr1.every((val, i) => val === arr2[i]);
  }
};
