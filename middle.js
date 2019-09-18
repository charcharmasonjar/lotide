//test/assertion function
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
  } else {
    console.log(`😰😰😰 Assertion Failed: ${actual} !== ${expected}`);
=======
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`uD83DuDC83 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`uD83DuDE14 Assertion Failed: ${array1} !== ${array2}`);
>>>>>>> checked with eslint
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

<<<<<<< 4c36902d8ecbefc0eecfbdc4bf60ef7f8ffa057a
//test code
assertArraysEqual((middle([1])), []);
assertArraysEqual((middle([1, 2])), []);
assertArraysEqual((middle([1, 2, 3])), [2]);
assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]);
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);
=======
assertArraysEqual(test1, []);
assertArraysEqual(test2, []);
assertArraysEqual(test3, [2]);
assertArraysEqual(test4, [3]);
assertArraysEqual(test5, [2, 3]);
assertArraysEqual(test6, [3, 4]);
>>>>>>> checked with eslint
