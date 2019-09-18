//test/assertion function
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
const middle = function (array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    let mid = array.length / 2;
    return array.slice(mid - 1, mid + 1)
  } else if (array.length % 2 !== 0) {
    let midIndex = (array.length -1) / 2;
    return array[midIndex];
  }
}

//test code
assertArraysEqual((middle([1])), []);
assertArraysEqual((middle([1, 2])), []);
assertArraysEqual((middle([1, 2, 3])), [2]);
assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]);
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);