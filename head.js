const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😬😬😬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* function head which returns the first item in the array.
The head function should not return the first element as an array.
It should simply return the element itself.
An array with only one element should still yield that one element as its head
An empty array should yield undefined as its head
*/

const head = function(array) {
  let first = array[0];
  return first;
};

//testing function out using assertEqual
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]));
assertEqual(head([5]), 5);