// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const tail = function(arr1) {
  let newArr = arr1.slice(1);
  return newArr;
};

module.exports = tail;