var nestedList = [
  1,
  [2, 3],
  [
    [[[4, 5], 6], 7],
    [8, [9, 10]],
  ],
  [
    [11, [[12, 13], 14]],
    [[15, 16], 17],
    [18, 19, 20],
  ],
];

const flat = (nestedList) => {
  let flatArray = [];
  nestedList.forEach((item) => {
    if (Array.isArray(item)) {
      flatArray = [...flatArray, ...flat(item)];
    } else {
      flatArray.push(item);
    }
  });
  return flatArray;
};

// const flattenedArray = flat(nestedList);
// const sum = flattenedArray.reduce((a, b) => a + b);
// console.log(flattenedArray, sum);

Array.prototype.FlattenList = function () {
  let flattenedList = [];
  for (let count = 0; count < this.length; count++) {
    if (Array.isArray(this[count])) {
      flattenedList = [...flattenedList, ...this[count].FlattenList()];
    } else {
      flattenedList.push(this[count]);
    }
  }
  return flattenedList;
};

console.log(nestedList.FlattenList());
