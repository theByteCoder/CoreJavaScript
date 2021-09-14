"use strict";

const n = 5;

for (var i = 1; i <= n; i++) {
    var lineVal = "";
    for (var j = 1; j <= i; j++) {
        lineVal = lineVal + j;
    }
    console.log(lineVal);
}
for (var i = 1; i <= n; i++) {
    var newLineVal = "";
    for (var j = 1; j <= n - i; j++) {
        newLineVal = newLineVal + j;
    }
    console.log(newLineVal);
}
