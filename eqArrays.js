const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    return arr1.every((val, i) => {
      if (Array.isArray(val) || Array.isArray(arr2[i])) {
        return eqArrays(val, arr2[i]);
      } else {
        return val === arr2[i];
      }
    });
  }
  return false;
};

module.exports = eqArrays;
