const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 2: Check the returned array elements
const words2 = ["Hi"];
tail(words2); // no need to capture the return value since we are not checking it
assertEqual(words2.length, 1); // original array should still have 3 elements!

const words3 = [];
tail(words3); // no need to capture the return value since we are not checking it
assertEqual(words3.length, 0); // original array should still have 3 elements!