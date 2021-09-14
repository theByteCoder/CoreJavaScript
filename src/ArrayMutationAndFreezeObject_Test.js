/**
 * 
 */

let arr = [ 1, 2, 4, 5 ];
arr[arr.length - 1] = "a";
console.log(arr);

Object.freeze(arr);
arr[1] = "b";
console.log(arr);