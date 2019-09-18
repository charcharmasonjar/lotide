//code we will use to test;
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😛 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {

};