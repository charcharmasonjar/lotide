const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//actual function
const middle = function (array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let mid = array.length / 2;
    return array.slice(mid - 1, mid + 1);
  } else {
    let midIndex = (array.length -1) / 2;
    return [array[midIndex]];
  }
}

//test code
module.exports = middle;