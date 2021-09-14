/**
 * 
 */

// normal function
function func(a, b){
	return (a+ b);
}
var val = func(1, 2);
console.log(val);

// annonymous function
var val = function(a, b) {
	return a+b;
}
console.log(val(10, 30));

// arrow function
var val = (a, b) => {return a+b};
console.log(val(10, 30));

// annonymous functions
var val = function(a, b) {
	return a + b;
}
console.log(val(1, 2));

// annonymous function
var val = function(a, b, c) {
	return a.concat(b).concat(c);
}
console.log(val("1", "2", "3"));

// arrow function
var val = (a,b) => a+b;
console.log(val(1, 2));