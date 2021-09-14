var arrow = (a, b) => {
    return a + b;
}

var annonymous = function(a, b) {
    return a + b;
}

const isEqual = arrow(1, 3) === annonymous(1, 2)

console.log(isEqual);

console.dir(annonymous(2, 3));