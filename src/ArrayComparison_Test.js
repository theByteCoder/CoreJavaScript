/**
 * 
 */

var arr1 = [ 1, 2, 3, 4, 5, 6 ];
var arr2 = [ 1, 2, 3, 4, 5 ];

JSON.stringify(arr1) === JSON.stringify(arr2) ? arr1.concat(arr2) : delete arr2;
console.log(arr2);
console.log(JSON.stringify(arr1));