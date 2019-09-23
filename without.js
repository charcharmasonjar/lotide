//functions we will use to test without function
const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😰😰😰 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//actual function

const without = function (source, itemsToRemove) {
  let result = source;
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (result[i] === itemsToRemove[j]) {
        result.splice(i, 1);
        i = i - 1;
      }
    }
  }
  return result;
};

//test cases
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([1, 2, 3, 4, 4, 5], [1, 4]));
