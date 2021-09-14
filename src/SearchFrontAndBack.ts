const FrontBackSearch = (needle: number, haystack: number[]) => {
  let front = 0;
  let back = haystack.length - 1;

  while (front <= back) {
    if (haystack[front] === needle) {
      return front;
    } else if (haystack[back] === needle) {
      return back;
    } else {
      front++;
      back--;
    }
  }
  return -1;
};

var needle: number = 4;
var haystack = [9, 3, 8, 5, 1, 4, 7, 6, 2];
console.time();
var indexFrontBack: number = FrontBackSearch(needle, haystack);
console.timeEnd();
console.log("indexFrontBack", indexFrontBack);
