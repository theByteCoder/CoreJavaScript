/**
 * 
 */

/* var can be declared multiple times, value gets overwritten */
var varValue = 10;
console.log(varValue);
var varValue = 20;
console.log(varValue);

/* let can be declared once, value can be overwritten */
let letValue = 30;
console.log(letValue);
letValue = 40;
console.log(letValue);

/* const can be declared once, value can not be overwritten, is read only */
const letValue = 50;
console.log(letValue);