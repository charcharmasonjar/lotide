/*
INSTRUCTIONS
Implement takeUntil which will keep collecting items from a provided array
until the callback provided returns a truthy value.

It will take in two parameters:
  1. The array to work with
  2. The callback (which Lodash calls "predicate")

The function will return a "slice of the array with elements taken from the beginning."
It should keep going until the callback/predicate returns a truthy value.

To keep things simple, the callback should only be provided one value: 
The item in the array.
*/

//TAKEUNTIL FUNCTION
const takeUntil = function(array, callback) {
  results = [];
  for(let element of array) {
    if (!callback(element)) {
      results.push(element);
    } else {
      return results;
    }
  }
  return results;
}

//CODE WE WILL USE TO TEST THE FUNCTION OUT
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😛 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😰 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CASES 
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);