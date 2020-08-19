const assertEqual = (actual, expected) => {
  return actual === expected
    ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
};

const findKeyByValue = (obj, findValue) => {
  return Object.keys(obj).find((val) => obj[val] === findValue);
};

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};
console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire'));

console.log(
  assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama')
);
console.log(
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
);
