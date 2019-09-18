//code we will use to test the function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😛 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//actual function
const countLetters = function(stringToCount) {
  const result = {};
  for(const letter of stringToCount) {
    if (letter !== ' ') {
      if(result[letter]) {
        result[letter] += 1
      } else {
        result[letter] = 1
      }
    }
  }
  return result;
};

//test code
console.log(countLetters("lighthouse in the house"));

const result1 = (countLetters("lighthouse in the house"));
const expected1 = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

assertEqual(result1['l'], expected1['l']);
assertEqual(result1['i'], expected1['i']);
