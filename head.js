<<<<<<< e817ef7898db5fa5afe309c7f1fa1a16b2fb7c04
const assertEqual = require('./assertEqual');

/* function head which returns the first item in the array.
The head function should not return the first element as an array.
It should simply return the element itself.
An array with only one element should still yield that one element as its head
An empty array should yield undefined as its head
*/
=======
// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
>>>>>>> refactored head & assertEquals

const head = function(array) {
  let first = array[0];
  return first;
};

<<<<<<< e817ef7898db5fa5afe309c7f1fa1a16b2fb7c04
//testing function out using assertEqual
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]));
assertEqual(head([5]), 5);
=======
module.exports = head;
>>>>>>> refactored head & assertEquals
