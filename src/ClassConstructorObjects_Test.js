/**
 * 
 */

var consVal;
class TestClass {
	constructor(a){
		this.consVal = a;
	}
	TestFunction(b){
		return this.consVal+b;
	}
}

var obj = new TestClass(1);
console.log(obj.TestFunction(2));