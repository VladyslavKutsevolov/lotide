const assertEqual = (actual, expected) => {
  return actual === expected
    ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
};

const countLetters = (str) => {
  const result = {};
  const noSpaceStr = str.split(' ').join('');
  for (let letter of noSpaceStr) {
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter] += 1;
    }
  }
  return result;
};

console.log(countLetters('lighthouse in the house'));
