const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const test1 = middle([1]);
const test2 = middle([1,2]);
const test3 = middle([1,2,3]);
const test4 = middle([1,2,3,4,5]);
const test5 = middle([1,2,3,4]);
const test6 = middle([1,2,3,4,5,6]);

assertArraysEqual(test1, []);
assertArraysEqual(test2, []);
assertArraysEqual(test3, [2]);
assertArraysEqual(test4, [3]);
assertArraysEqual(test5, [2, 3]);
assertArraysEqual(test6, [3, 4]);