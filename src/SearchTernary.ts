const TernarySearch = (needle: number, haystack: number[]) => {
  let l = 0;
  let r = haystack.length - 1;

  while (r >= l) {
    let midLeft = l + Math.floor((r - l) / 3);
    let midRight = r - Math.floor((r - l) / 3);

    if (haystack[midLeft] === needle) {
      return midLeft;
    } else if (haystack[midRight] === needle) {
      return midRight;
    } else if (haystack[midLeft] > needle && haystack[midRight] < needle) {
      l = midLeft + 1;
      r = midRight - 1;
    } else if (haystack[midLeft] > needle) {
      r = midLeft - 1;
    } else if (haystack[midLeft] < needle) {
      l = midLeft + 1;
    } else if (haystack[midRight] < needle) {
      l = midRight + 1;
    } else if (haystack[midRight] > needle) {
      r = midRight - 1;
    }
  }
  return -1;
};

var needle: number = 4;
var haystack: number[] = [1, 2, 3, 4, 5, 6, 8, 9];

console.time();
var index: number = TernarySearch(needle, haystack);
console.timeEnd();
console.log("index", index);
