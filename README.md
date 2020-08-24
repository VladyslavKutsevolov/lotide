# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @VladyslavKutsevolov/lotide`

**Require it:**

`const _ = require('/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(array1, array2)` - returns Assertion Passed or Assertion Failed on nested arrays
- `assertEqual(array1, array2)` - return Assertion Passed or Assertion Failed on primitive values
- `assertObjectsEqual(object1, object12)` - returns Assertion Passed or Assertion Failed on nested objects
- `countLetters(string)` - count letters in a string
- `countOnly(array, itemsCount)` - count letters in array
- `eqArrays(array1, array2)` - returns true if arrays are equal, accepts deep nested arrays
- `eqObjects(object1, object2)` - returns true if objects are equal, accepts deep nested objects
- `findKeyByValue(object, valueToFind)` - returns keys if value exist or undfined if not
- `flatten(array)` - flat deep nested array
- `head(array)` - return first value of the array
- `letterPositions(string)` - return an object with letters as keys and their indexes as values
- `map(array)` - simple implementation `map` funtion from ES6
- `middle(array)` - return middle value of array if array length is odd or two values in the middle in array length is even
- `tail(array)` - The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
- `takeUntil(array, callback)` - will parse through array based on function, and return a new array of filtered items.
- `without(array, itemsToRemove)` - It should return a new array with only those elements from source that are not present in the itemsToRemove array.
