//code we will use to test;
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😛 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function that returns true/false if two arrays are equal or not
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true;
};

//check object have the same number of keys
//check value of key in object2 is the same as object2
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      let isEqual = eqArrays(object1[key], object2[key]);
      if (!isEqual) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

//test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

