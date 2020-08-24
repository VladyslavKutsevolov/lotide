const takeUntil = (array, callback) => {
  const result = [];

  for (const el of array) {
    if (callback(el)) {
      return result;
    } else {
      result.push(el);
    }
  }
  return result;
};

module.exports = takeUntil;
