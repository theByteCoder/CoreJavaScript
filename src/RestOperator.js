/**
 * 
 */

function restOperator(...args) {
	var result = 0;
	for(var arg of args){
		result += arg;
	}
	console.log(result)
}
restOperator(10, 20, 30);

function substract(...args){
	var result = 0;
	for(var arg of args){
		result += arg;
	}
	console.log(result);
}
substract(10, 20)