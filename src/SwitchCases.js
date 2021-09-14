/**
 * 
 */

var value = 3;
switch (value) {
case 1:
	console.log("value is " + 1);
	break;
case 2:
	console.log("value is " + 2);
	break;
default:
	console.log("value is " + undefined + " or " + null);
}
switch (value) {
case 1:
case 2:
	console.log("less than 3");
	break;
case 3:
case 4:
	console.log("more than 2");
	break;
default:
	console.log("value is " + undefined);
}