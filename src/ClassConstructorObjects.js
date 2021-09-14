/**
 * 
 */

/* rest function */
function normalfunction(...args){
	for(var arg of args){
		arg += arg;
	}
	console.log(arg);
}

class player {
	// constructor
	constructor(test, pay, build){
		this.test = test;
		this.pay = pay;
		this.build = build;
		console.log(test.concat(pay).concat(build));
		normalfunction(1,3,4);
	}
	// class insied function
	classFunction(){
		let val = `value is ${this.test} ${this.pay} ${this.build}`;
		return val;
	}
}

var callClass = new player("a", "v", 4);
console.log(callClass);
console.log(callClass.classFunction())