/**
 * when we directly assign object1/array1 to another object2/array2, then
 * changes made to object1/array1 also reflect on object2/array2*
 */

var obj = {
	"prop 1" : "1",
	"prop 2" : "2"
};

var objCopy1 = obj;
console.log(objCopy1);

obj["prop 2"] = "Test";
console.log(objCopy1);
