const assertEqual = (actual, expected) => {
  return actual === expected
    ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
};

const countOnly = (allItems, itemsCount) => {
  let result = {};

  allItems.forEach((name) => {
    if (itemsCount[name]) {
      result[name] = (result[name] || 0) + 1;
    }
  });
  return result;
};

const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe',
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Joe: false,
});

console.log(assertEqual(result1['Jason'], 1));
console.log(assertEqual(result1['Karima'], undefined));
console.log(assertEqual(result1['Fang'], 2));
