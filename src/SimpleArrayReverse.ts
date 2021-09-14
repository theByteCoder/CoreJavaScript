var sortedList: number[] = [2, 3, 4, 1, 7];
var mid = Math.ceil((sortedList.length - 1) / 2);

console.time();
for (let count = 0; count < mid; count++) {
  const end = sortedList.length - count - 1;
  let temp = sortedList[count];
  sortedList[count] = sortedList[end];
  sortedList[end] = temp;
}
console.timeEnd();

console.log(sortedList);
