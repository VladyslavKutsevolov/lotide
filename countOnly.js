const countOnly = (allItems, itemsCount) => {
  let result = {};

  allItems.forEach((name) => {
    if (itemsCount[name]) {
      result[name] = (result[name] || 0) + 1;
    }
  });
  return result;
};

module.exports = countOnly;
