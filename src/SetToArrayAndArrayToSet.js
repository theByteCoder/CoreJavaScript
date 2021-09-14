/**
 * 
 */

var set = new Set([ 1, 1, 2, 3, 4 ]);
console.log(set);
var arr = Array.from(set);
console.log(arr);
arr.push("test", "test");
console.log(arr);

set = new Set(arr);
console.log(set);