let val = function () {
    return 3;
}
console.log(val); // return function
console.log(val()); // return value from function

val = () => {
    return 3;
}
console.log(val); // return function
console.log(val()); // return value from function

val = function () {
    return () => {
        return 3;
    };
}
let returns = val();
console.log(returns); // return function
console.log(returns()); // return value from function