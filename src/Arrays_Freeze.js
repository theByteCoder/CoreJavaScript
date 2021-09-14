/**
 * 
 */

var myArray = [ "ABC", 2, "EFG" ];
myArray[myArray.length] = 1;
console.log(myArray);

Object.freeze(myArray);
myArray[myArray.length] = 3;
console.log(myArray);