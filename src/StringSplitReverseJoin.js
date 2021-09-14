/**
 * 
 */

// reverse position of words
var string = `coding is great`;
console.log(string.split(" ").reverse().join(" "));

// reverse entire string
string = `coding is great`;
console.log(string.split("").reverse().join(""));

//reverse using string logic
string = `coding is great`;
var newString = "";
var arr = string.split("");
for (var i = arr.length - 1; i >= 0; i--) {
	newString += arr[i];
}
console.log(newString);