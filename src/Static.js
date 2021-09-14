/**
 * 
 */

var a = b = "2";
class StaticMethods {
	static func(){
		console.log(a + b);
	}
}
StaticMethods.func();

class ClassWithStaticMethod {
	static staticMethod() {
	  return 'static method has been called.';
	}
  }
  
  console.log(ClassWithStaticMethod.staticMethod());
  // expected output: "static method has been called."  