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
	return a + b;
};
console.log(val(1, 2));

// arrow function
var val = (a, b) => { return a + b };
console.log(val(1, 2));