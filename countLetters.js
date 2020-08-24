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

module.exports = countLetters;
