const flatten = (array) => {
  if (Array.isArray(array)) {
    return array.reduce((acc, arr) => acc.concat(arr), []);
  } else {
    return `${array} is not array`;
  }
};
console.log(flatten('s'));
