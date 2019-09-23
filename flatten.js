const flatten = function(arr) {
  let result = [];
  for (let element of arr) {
    if (Array.isArray(element) === true) {
      result = result.concat(element);
    } else {
      result.push(element);
    }
  }
  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
