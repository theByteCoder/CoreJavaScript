/**
 * 
 */

var promise = new Promise((resolve, reject) => {
	let val = 1 + 2;
	if(val===2){
		resolve('success');
	} else {
		reject('failed');
	}
});
promise.then((message) => {
	console.log(message);
}).catch((message)=>{
	console.log(message);
});