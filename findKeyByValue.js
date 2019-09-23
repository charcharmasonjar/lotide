/*function findKeyByValue which takes in an object 
and a value. It should scan the object and return 
the first key which contains the given value. 
If no key with that given value is found,
then it should return undefined. */
const assertEqual = require('./assertEqual');

//actual function
//returns a value from a key value pair
const findKeyByValue = function (objectToSearch, valueToFind) {
  for (let key in objectToSearch) {
    if (objectToSearch[key] === valueToFind) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

// //test object and test code
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
