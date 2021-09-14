/**
 * 
 */

function func() {
	console.log("First function")
}
func();

function newFunc(a, b) {
	console.log(a + b)
}
newFunc(10, 5);

function returnValue(a, b) {
	return a - b;
}
console.log(returnValue(10, 5));

(function autoCall() {
	console.log("Coding is great");
})();