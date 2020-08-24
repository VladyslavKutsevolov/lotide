const { inspect } = require('util');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function (actual, expected) {
  return eqObjects(actual, expected)
    ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    : `🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
};

module.exports = assertObjectsEqual;
