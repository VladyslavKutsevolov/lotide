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

const middle = (array) => {
  let middle = array[Math.round(array.length / 2)];
  if (array.length > 2) {
    return array.length % 2 ? middle : (middle = [middle + 1, middle]);
  } else {
    return [];
  }
  return middle;
};

console.log(middle([1, 5, 4, 3]));
