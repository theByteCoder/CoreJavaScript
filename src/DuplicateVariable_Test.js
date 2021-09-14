/**
 * 
 */

"use strict";

var val = 1;
val = 2;
console.log(val);

Object.freeze(val);
val = 3;
console.log(val);