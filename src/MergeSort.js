let haystack = [
  2, 354365, 5676, 878, 9, 12, 3434546, 7, 98, 4, 4546, 7, 890, -213,
];

// let haystack = [3, 4, 1, 2];

Array.prototype.MergeSort = function () {
  if (this.length < 2) return this;

  let midIndex = Math.floor(this.length / 2);
  let leftArray = this.slice(0, midIndex);
  let rightArray = this.slice(midIndex, this.length);

  return Array.Merge(leftArray.MergeSort(), rightArray.MergeSort());
};

Array.Merge = function (leftArray, rightArray) {
  const resultArray = [];
  let leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      resultArray.push(leftArray[leftIndex]);
      leftIndex += 1;
    } else {
      resultArray.push(rightArray[rightIndex]);
      rightIndex += 1;
    }
  }
  return resultArray
    .concat(leftArray.splice(leftIndex))
    .concat(rightArray.splice(rightIndex));
};

haystack = haystack.MergeSort();
console.log(haystack);
