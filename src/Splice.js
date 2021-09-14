/**
 * 
 */

var arr = [1,2,3,4];
arr.splice(1,1,7,8); // Array.splice( index, remove_count, item_list )
console.log(arr);

arr = [1,2,3,4];
arr.splice(0,1,7,8); // Array.splice( index, remove_count, item_list )
console.log(arr);

delete arr;