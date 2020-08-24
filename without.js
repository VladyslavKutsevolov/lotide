const without = (array, itemsToRemove) => {
  for (let val of itemsToRemove) {
    return array.filter((element) => element !== val);
  }
};

module.exports = without;
