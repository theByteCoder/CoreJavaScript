/**
 * 
 */

var encoded = (val) => {return escape(val)};
console.log(encoded("coding is great"));

var decoded = function(encodedVal) {
	return unescape(encodedVal)
}
console.log(decoded(encoded("coding is great")));