/* We'll implement a new function letterPositions 
which will return all the indices (zero-based positions) 
in the string where each character is found.

For each letter, instead of returning just one number 
to represent its number of occurrences, 
multiple numbers may be needed to represent 
all the places in the string that it shows up.*/

//code we will use to test the function
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
    console.log(`😛 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//actual function, returns an object
//keys are each letter in sentence
//values are an array containing the indices where the letter appears
const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

//test code
console.log(letterPositions("hello"));

//test string: "hello"
// const helloLetters = {
//   h: [0],
//   e: [1],
//   l: [2, 3],
//   o: [4],
// }


assertArraysEqual(letterPositions('hello').h, [0]);
assertArraysEqual(letterPositions('hello').l, [2, 3]);