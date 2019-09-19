/* INSTRUCTIONS
Implement the function findKey which takes in an object and a callback.
It should scan the object
and return the first key for which the callback returns a truthy value.
If no key is found, then it should return undefined.
*/

//ACTUAL FUNCTION
const findKey = function(object, callback) {
  for(let key in object) {
    console.log("key is: ", key);
    console.log("object.key is ", object[key]);
    console.log("callback on object.key is ", callback(object[key]));
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
}

//FUNCTIONS USED TO TEST
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😛 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TESTS
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(result1, "noma");