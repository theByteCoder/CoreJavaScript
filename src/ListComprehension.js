const string = '1234-10';
const forbidden = '-';

console.log([...string].filter(c => !forbidden.includes(c)).map(c => parseInt(c)));
// result: [ 1, 2, 3, 4, 5 ]