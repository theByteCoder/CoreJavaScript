/**
 * 
 */

var obj = {
	"Test" : `Test`,
	"Test 1" : 1,
	"Test 2" : 2
}

// direct copy
var newObj = obj;
console.log(newObj);

// first convert object to string, then convert string to object
var stringOfObj = JSON.stringify(obj)
newObj = JSON.parse(stringOfObj);
console.log(newObj);