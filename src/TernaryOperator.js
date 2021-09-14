/**
 * 
 */

/* normal if-else operator */
var val = 123;
if (val > 100) {
	console.log(true);
} else {
	console.log(false);
}

/* ternary if-else operator */
val < 100 ? console.log(true) : console.log(false);

/*nested ternary */
val < 100 ? console.log(true) : val > 100 ? console.log(true) : console.log(false);

val < 10 ? console.log(true) : console.log(false);
		 
val == 10 ? console.log(false) : console.log(true);