/**
 * when we directly assign object1/array1 to another object2/array2, then
 * changes made to object1/array1 also reflect on object2/array2*
 */

var arr = [ 1, 2, 3, 4 ];

var arrCopy1 = JSON.parse(JSON.stringify(arr));
console.log(arrCopy1);

arr[1] = "Test";
console.log(arrCopy1);
console.log(arr);