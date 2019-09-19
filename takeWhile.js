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

//THE AMAZING FUNCTION ITSELF

const takeUntil = function(array, callback) {
  
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