const assertEqual = (actual, expected) => {
  return actual === expected
    ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
};

const findKeyByValue = (obj, findValue) => {
  let result = Object.entries(obj).find((val) => val[1] === findValue);
  return result && result[0];
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
