const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😬😬😬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
Tail function which returns the "tail" of an array
(everything except for the first item (head) of the provided array)
Your function should not modify the array that is passed in.
It should return a new array.
An array with only one element should yield an empty array for its tail
An empty array should yield an empty array for its tail
*/

const tail = function (array) {
  let result = array.slice(1);
  return result;
};

//testing out function
console.log(tail([1, 2, 3]));
console.log(tail([3]));
console.log(tail([]));
const words = [1, 3, 5];
tail(words);
assertEqual(words.length, 3);