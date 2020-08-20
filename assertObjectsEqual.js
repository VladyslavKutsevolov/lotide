const { inspect } = require('util');

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  return eqObjects(actual, expected)
    ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    : `🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
};

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
console.log(assertObjectsEqual(ab, ba)); // => true

const abc = { a: '1', b: '2', c: '3' };
console.log(assertObjectsEqual(ab, abc));
