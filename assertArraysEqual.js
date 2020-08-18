const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    return arr1.every((val, i) => val === arr2[i]);
  }
};

const assertArraysEqual = (arr1, arr2) => {
  return eqArrays(arr1, arr2)
    ? `✅✅✅ Assertion Passed`
    : `🛑🛑🛑Assertion Failed`;
};
