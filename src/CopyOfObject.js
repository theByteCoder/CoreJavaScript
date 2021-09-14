/**
 * 
 */

var obj = {
	"prop 1" : "1",
	"prop 2" : "2"
};

var objCopy1 = obj;
console.log(objCopy1);

var objCopy2 = JSON.parse(JSON.stringify(obj));
console.log(objCopy2);

console.log(obj["prop 1"]);
