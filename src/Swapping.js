var x = 1, y = 3;

// without 3rd variable
x = x + y;
y = x - y;
x = x - y;
console.log(x, y)

// with 3rd variable
var a = 1, b = 3, c = 0
c = a
a = b
b = c
console.log(a, b)