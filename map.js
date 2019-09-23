/* Our map function will take in two arguments:
1. An array to map
2. A callback function
The map function will return a new array
based on the results of the callback function.*/

const map = function(array, callback) {
  const results = [];
  for(let element of array) {
    results.push(callback(element));
  }
  return results;
}

module.exports = map;


// TESTING OUT FUNCTION
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word + " my dude");
// const results3 = map(words, word => word.toUpperCase());
