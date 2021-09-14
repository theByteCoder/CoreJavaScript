/**
 * 
 */

var arr = [1, 2, 3, 4];
arr = ["start", ...arr, "end"];
console.log(arr);

function speadFunc(...args){
	for(var arg of args){
		arg += arg;
	}
	console.log(arg);
}
speadFunc(1, 2);