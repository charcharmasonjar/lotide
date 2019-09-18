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

<<<<<<< e0dea04c4ddc35bb740b9970e9b2898cd373bc08
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😛 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😰 Assertion Failed: ${actual} !== ${expected}`);
=======
const assertArraysEqual = function(array1, array2) {

  let a1 = [1,2,3,4,5];
  let a2 = [1,2,3];
  if (eqArrays(a1, a2) === true) {
    console.log(`\uD83D\uDC83 Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`\uD83D\uDE14 Assertion Failed: \"${a1}\" !== \"${a2}\"`);
>>>>>>> corrected assertArraysEqual function
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [1, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3]);
//how to get it to return the original array (to show if something is a string etc)
