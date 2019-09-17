const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😰😰😰 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//testing the function out

assertEqual("Light", "House");
assertEqual("light", "light");
assertEqual(1, 1);
assertEqual(2, 1);