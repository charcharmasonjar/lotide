# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @charcharmasonjar/lotide`

**Require it:**

`const _ = require('@charcharmasonjar/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: takes in two arrays and prints out a message indicating if they match or not (with emojis).

* `assertEqual(actual, expected)`: takes in two values and prints out a message indicating if they match or not (with emojis).

* `assertObjectsEqual(actual, expected)`: takes in two objects and prints out a message indicating if they match or not (with emojis).

* `countLetters(stringToCount)`: takes in a string and returns an object with each letter and the number of times it occurs in the string.

* `countOnly(allItems, itemsToCount)`: takes in an array of strings and an object specifying what to count, and returns an object of the specified strings and how many times they occur in the input array.

* `eqArrays(array1, array2)`: takes in two arrays and returns true or false if arrays are equal or not.

* `eqObjects(object1, object2)`: takes in two objects and returns true or false if arrays are equal or not.

* `findKey(object, callback)`: takes in an object and a callback function and returns the first key for which the callback returns a truthy value. If no key is found, it returns undefined. 

* `findKeyByValue(object, value)`: takes in an object and a value and returns the first key which contains the given value. If no key with that value is found, it returns undefined.

* `flatten(array)`: takes in an array and returns an array with one level of nested arrays flattened.

* `head(array)`: takes in an array and returns the first item in the array (just the item, not the element as an array). An array with only one element returns that one element as its head. An empty array returns undefined as its head.

* `letterPositions(string)`: takes in a string and returns an object containing each character in the string and an array of the indices where each character is found in the string.   

* `map(array, callback)`: takes in an array to map and a callback function, and returns a new array based on the results of the callback function being called on each element in the array. 

* `middle(array)`: takes in an array and returns the middle elements. If the array contains an odd number of elements, it returns the middle element. If the array contains an odd number of elements, it returns an array containing the two middle elements.

* `tail(array)`: takes in an array, and returns a new array containing every item except the first. 

* `takeUntil(array, callback)`: takes in an array and a callback, and returns a slice of the array from the begining to the first element for which the callback returned a truthy value. 

* `without(sourceArray, itemsToRemoveArray)`: takes in an array and an array containing items to remove, and returns an array containing only those elements not present in the itemsToRemove array. 