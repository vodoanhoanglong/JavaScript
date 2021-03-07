// Given an array of arrays, flatten them into a single array

/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

 function flatten(arr) {
  // viết code ở đây.
  return arr.reduce((a,b)=>a.concat(Array.isArray(b)? flatten(b) : b), []);
}

