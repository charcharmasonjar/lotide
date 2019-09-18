//code we will use to test;
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😛 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//check object have the same number of keys
//check value of key in object2 is the same as object2
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for(const key in object1) {
      if(object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true); // => true

assertEqual(eqObjects(ab, abc), false); 
