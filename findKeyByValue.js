/*function findKeyByValue which takes in an object 
and a value. It should scan the object and return 
the first key which contains the given value. 
If no key with that given value is found,
then it should return undefined. */

//code we will use to test;
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😛 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//actual function
//returns a value from a key value pair
const findKeyByValue = function (objectToSearch, valueToFind) {
  for (let [key, value] of Object.entries(objectToSearch)) {
    console.log(key, value);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre));