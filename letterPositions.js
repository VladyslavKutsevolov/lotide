const letterPositions = (sentence) => {
  const results = {};
  const noSpaceStr = sentence.split(' ').join('').split('');

  noSpaceStr.forEach((letter, i) => {
    if (!results[letter]) {
      results[letter] = [];
      results[letter].push(i);
    } else {
      results[letter].push(i);
    }
  });

  return results;
};

module.exports = letterPositions;
