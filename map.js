const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    return arr1.every((val, i) => val === arr2[i]);
  }
};

const assertArraysEqual = (actual, expected) => {
  return eqArrays(actual, expected)
    ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
};

const words = ['ground', 'control', 'to', 'major', 'tom'];

const map = (array, callback) => {
  const result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);
