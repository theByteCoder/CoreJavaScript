/**
 * 
 */

/* normal function */
function returnVal() {
	return new Date();
}
var val = returnVal();
console.log(val);

/* annonymous function */
val = function() {
	return new Date();
};
console.log(val);

/* arrow function */
val = () => new Date();
console.log(val);

val = (a, b) => (a+b);
console.log(val(3,4));

function testFunc(a, b){
	return a.concat(a).concat(b);
}

val = (a, b) => a.concat(a).concat(b);
console.log(val("1", "2"));

// annonymous function
var valAnnonymous = function(a, b){
	return a+b;
}
console.log("valAnnonymous " + valAnnonymous(1, 2))

// arrow function
var valArrow = (a, b, c) => a+b+c;
console.log("valArrow " + valArrow(1,2,3));