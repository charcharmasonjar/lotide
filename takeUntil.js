const eqArrays = function (arr1, arr2) {
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

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`\uD83D\uDC83 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`\uD83D\uDE14 Assertion Failed: ${array1} !== ${array2}`);
  }

};


const takeUntil = function (array, callback) {
  const results = [];
  for (const element of array) {
    if (callback(element) === true) {
      return results;
    }
    results.push(element);
  }
  return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // [ 'I\'ve', 'been', 'to', 'Hollywood' ]

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);