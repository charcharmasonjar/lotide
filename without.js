/* INSTRUCTIONS:
Implement without which will return a subset of a given array,
removing unwanted elements.
This function should take in a source array and a itemsToRemove array. 
It should return a new array with only those elements from source
that are not present in the itemsToRemove array.
*/

const without = function (source, itemsToRemove) {
  let result = source;
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (result[i] === itemsToRemove[j]) {
        result.splice(i, 1);
        i = i - 1;
      }
    }
  }
  return result;
};

module.exports = without;
