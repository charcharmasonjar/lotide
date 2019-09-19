/* Our map function will take in two arguments:
1. An array to map
2. A callback function
The map function will return a new array
based on the results of the callback function.*/

//CODE WE WILL USE TO TEST
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


//THE FUNCTION
const map = function(array, callback) {
  const results = [];
  for(let element of array) {
    results.push(callback(element));
  }
  return results;
}


//TESTING OUT FUNCTION
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word + " my dude");
const results3 = map(words, word => word.toUpperCase());


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ["ground my dude", "control my dude", "to my dude", "major my dude", "tom my dude"]);
assertArraysEqual(results3, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);

