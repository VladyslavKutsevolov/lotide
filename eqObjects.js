const assertEqual = (actual, expected) => {
  return actual === expected
    ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    return arr1.every((val, i) => val === arr2[i]);
  }
  return false;
};

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let key in object1) {
    if (
      object1[key].constructor === Object &&
      object2[key].constructor === Object
    ) {
      return eqObjects(object1[key], object2[key]);
    }
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    }

    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: '1', b: '2', c: '3' };
console.log(assertEqual(eqObjects(ab, abc), false)); //

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
console.log(assertEqual(eqObjects(cd, dc), true)); // => true

const cd2 = { c: '1', d: ['2', 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false)); // => false

console.log(
  assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)
); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
