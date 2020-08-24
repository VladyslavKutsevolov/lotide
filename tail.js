const tail = (array) => {
  return array.length === 0 || array.length === 1
    ? []
    : array.slice(1, array.length);
};

module.exports = tail;
