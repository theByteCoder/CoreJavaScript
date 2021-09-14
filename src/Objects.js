/**
 * 
 */

var obj = {
		1 : 1,
		"First value" : "Test 1",
		"SecondValue" : 2,
};
console.log(obj);
console.log(obj[1]);
console.log(obj["First value"]);
console.log(obj.SecondValue);

obj["First value"] = "1";
console.log(obj["First value"]);
obj.SecondValue = "Test 2";
console.log(obj.SecondValue);

obj.AddNewProp = 10;
console.log(obj);

delete obj.AddNewProp;
console.log(obj);
delete obj["First value"];
console.log(obj);