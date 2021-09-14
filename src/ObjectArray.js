/**
 * 
 */

var arrInsideObject = {
	"array" : [ "1", 2, "three" ],
	"object" : "object"
};
var stringOfObject = JSON.stringify(arrInsideObject);
var jsonParseOfObject = JSON.parse(stringOfObject);
console.log(arrInsideObject);
console.log(stringOfObject);
console.log(jsonParseOfObject);
console.log(JSON.parse(JSON.stringify(arrInsideObject)));
var insideObject = arrInsideObject.array[2];
console.log(insideObject);

var arrOfObjects = [ {
	"val 1" : 1,
	"val 2" : 2
}, {
	1 : "1",
	2 : "2",
	"list of elements" : [ "list 1", "list 2" ]
} ];
var findSecondVal = arrOfObjects[1]["list of elements"][1];
console.log(findSecondVal);

console.log(arrOfObjects[1]["list of elements"]);

arrOfObjects[1]["list of elements"][2] = "Test update";
console.log(arrOfObjects);

arrOfObjects[1]["list of elements"].push(1);
console.log(arrOfObjects);
arrOfObjects[1]["list of elements"].pop();
console.log(arrOfObjects);
arrOfObjects[1]["list of elements"].unshift(1);
console.log(arrOfObjects);
arrOfObjects[1]["list of elements"].shift();
console.log(arrOfObjects);