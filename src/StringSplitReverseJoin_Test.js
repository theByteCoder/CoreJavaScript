/**
 * 
 */

var val = "Coding standards";

console.log(val.split("").reverse().join(""));

console.log(val.split(" ").reverse().join(" "));

var newVal = "";
for (var x = val.length - 1; x >= 0; x--) {
	newVal += val[x];
}
console.log(newVal);