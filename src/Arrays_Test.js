/**
 * 
 */

var arrs = [ [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ], [ "a", "b" ], [ [ "abc", [1, "efg", ["xy", "vw"]] ] ] ];
for(var arr_1 of arrs) {
	for(var arr_2 of arr_1){
		console.log(arr_2);
	}
}