<<<<<<< b1aa2f0464ec383485d61ce19c9f27f4b8ee6af1
const flatten = function(arr) {
  let result = [];
  for (let element of arr) {
    if (Array.isArray(element) === true) {
      result = result.concat(element);
=======
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return "The arrays are not the same length.";
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`\uD83D\uDC83 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`\uD83D\uDE14 Assertion Failed: ${array1} !== ${array2}`);
  }

};

const flatten = function(array) {
  let resultingArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        resultingArray.push(array[i][j]);
      }
>>>>>>> performed eslint
    } else {
      result.push(element);
    }
  }
  return result;
};

<<<<<<< b1aa2f0464ec383485d61ce19c9f27f4b8ee6af1
console.log(flatten([1, 2, [3, 4], 5, [6]]));
=======
const test1 = flatten([1, 2, [5, 6], [7]]);
const test2 = flatten([1, [2], [3, 4, 5, 6]]);

assertArraysEqual(test1, [1, 2, 5, 6, 7]);
assertArraysEqual(test2, [1, 2, 3, 4, 5, 6]);
>>>>>>> performed eslint
