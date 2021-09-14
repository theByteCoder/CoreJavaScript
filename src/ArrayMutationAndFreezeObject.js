/**
 * 
 */

const arr = [ 1, 2, 4, 5 ];
arr[1] = 3;
console.log(arr);

/* prevent array mutation */
Object.freeze(arr);
arr[1] = 99;
console.log(arr);