/**
 * 
 */

var obj = {
	"1" : "1",
	"2" : 2,
	3.1 : 3,
	4 : "4"
};
console.log(obj.hasOwnProperty("3.1"));
console.log(obj.hasOwnProperty("3.2"));