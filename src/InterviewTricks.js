/**
 * 
 */

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

/* converts integer to string and concatenates */
console.log(2 + '2');
console.log('2' + 2);

/* converts string to integer and performs substraction */
console.log(5 - '2');
console.log('2' - 2);

/* outputs Not A Number */
console.log(2 - 'Test 1');
console.log('Test 2' - 2);

/* remove duplicates from array */
let arr = [ 1, 2, 3, 3, 5, 5, 5, 8 ];
arr = new Set(arr);
console.log(arr);