const head = (array) => {
  return array.length === 0 ? undefined : array.shift();
};

module.exports = head;
