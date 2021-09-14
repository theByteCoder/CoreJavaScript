/**
 * 
 */

/* let - block scope */
function scopeLet() {
	"use strict";
	{
		let valLet = 2;
		console.log(valLet);
	}
}
scopeLet();

/* var - function scope */
function scopeVar() {
	"use strict";
	{
		var valVar = 2;
		console.log(valVar);
	}
	console.log(valVar);
}
scopeVar();