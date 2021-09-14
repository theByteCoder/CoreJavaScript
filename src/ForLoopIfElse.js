/**
 * 
 */

for (var initiator = 0; initiator <= 100; initiator++) {
	if (initiator == 0) {
		console.log(0);
	} else if (initiator % 2 == 0 && initiator % 3 == 0) {
		console.log("michelin");
	} else if (initiator % 2 == 0) {
		console.log("miche");
	} else if (initiator % 3 == 0) {
		console.log("lin");
	} else {
		console.log(initiator);
	}
}