const InterpolationSearch = (needle: number, haystack: number[]) => {
  const low = 0;
  const high = haystack.length - 1;
  const pos = Math.ceil(
    low +
      ((needle - haystack[low]) / (haystack[high] - haystack[low])) *
        (high - low)
  );
  if (pos >= low && pos <= high) return pos;
  return -1;
};

var needle: number = 4;
var haystack: number[] = [1, 2, 3, 4, 5, 6, 8, 9];

console.time();
var index: number = InterpolationSearch(needle, haystack);
console.timeEnd();
console.log("index", index);
