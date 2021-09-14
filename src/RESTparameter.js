var val = function(...args) {
    var result = null;
    for (var arg of args) {
        result += arg ;
    }
    return result;
}
console.log(val(1, 2, 3));