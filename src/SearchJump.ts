const JumpSearch = (needle: number, haystack: number[]) => {
  const jumpSize = Math.floor(Math.sqrt(haystack.length));
  let start = 0;
  let end = jumpSize;
  const listSize = haystack.length;
  let jumps = 0;
  while (haystack[end] <= needle && end < listSize) {
    start = end;
    end += jumpSize;
    if (end > listSize - 1) {
      end = listSize;
    }
    jumps++;
  }
  console.log("Number of jumps", jumps);

  for (let index = start; index < end; index++) {
    if (haystack[index] === needle) {
      return index;
    }
  }

  return -1;
};

var needle: number = 4;
var haystack: number[] = [1, 2, 3, 4, 5, 6, 8, 9];

console.time();
var index: number = JumpSearch(needle, haystack);
console.timeEnd();
console.log("index", index);
