/**
 * 
 */

var myArray = ["ABC", 2, "EFG"];
	console.log(myArray);
	console.log(JSON.stringify(myArray));
	
	myArray = [["Test 1", 2, [[1, 2], "3D"]], ["Test 2", 1, 1] , "Test 3"];
	console.log(myArray[0][2][1]);

	myArray[10] = 10;
	console.log(myArray);