const assertEqual = (actual, expected) => {
  return actual === expected
    ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
};

const tail = (array) => {
  return array.length === 0 || array.length === 1
    ? []
    : array.slice(1, array.length);
};

const result = tail(['Hello', 'Lighthouse', 'Labs']);

assertEqual(result.length, 2);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');
