const middle = (array) => {
  let middle = array[Math.floor(array.length / 2)];
  if (array.length > 2) {
    return array.length % 2 ? middle : (middle = [middle + 1, middle]);
  } else {
    return [];
  }
};

module.exports = middle;
