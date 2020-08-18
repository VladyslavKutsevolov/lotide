const assertEqual = (actual, expected) => {
  return actual === expected
    ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
};

console.log(assertEqual('Lighthouse Labs', 'Bootcamp'));
console.log(assertEqual(1, 1));

const head = (array) => {
  return array.length === 0 ? undefined : array.shift();
};

console.log(assertEqual(head([5, 6, 7]), 5));
console.log(assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'));
