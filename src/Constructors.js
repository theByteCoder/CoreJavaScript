/**
 * 
 */

var a, b = "";
class classConstructor {
	constructor(){
		this.a = "Coding is ";
		this.b = "great";
	}
	funcConstructor() {
		console.log(this.a + this.b);
	}
}
var obj = new classConstructor();
obj.funcConstructor();