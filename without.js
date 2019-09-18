//functions we will use to test without function
const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true;
};

<<<<<<< 4c36902d8ecbefc0eecfbdc4bf60ef7f8ffa057a
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`);
=======
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`\uD83D\uDC83 Assertion Passed: ${array1} === ${array2}`);
>>>>>>> checked with eslint
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

<<<<<<< 4c36902d8ecbefc0eecfbdc4bf60ef7f8ffa057a
//test cases
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([1, 2, 3, 4, 4, 5], [1, 4]));
=======
const test1 = without([1,2,3], [1]);
const test2 = without(["1", "2", "3"], ["3"]);

assertArraysEqual(test1, [2, 3]);
assertArraysEqual(test2, ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
>>>>>>> checked with eslint
