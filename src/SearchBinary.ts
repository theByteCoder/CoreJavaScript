const BinarySearch = (needle: number, haystack: number[]) => {
  let l = 0;
  let r = haystack.length - 1;

  while (r >= l) {
    const mid = Math.floor((l + r) / 2);
    if (haystack[mid] === needle) {
      return mid;
    } else if (haystack[mid] < needle) {
      l = mid + 1;
    } else if (haystack[mid] > needle) {
      r = mid - 1;
    }
  }
  return -1;
};

var needle: number = 4;
var haystack: number[] = [1, 2, 3, 4, 5, 6, 8, 9];

console.time();
var index: number = BinarySearch(needle, haystack);
console.timeEnd();
console.log("index", index);
