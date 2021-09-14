// in this code block, since test_1 has a timeout of 10 seconds, test_2 content gets printed first
function test_1() {
    setTimeout(() => {
        console.log('Coding is best');
    }, 10000);
};
function test_2() {
    console.log('Coding is great');
}
// test_1();
// test_2();

// in this code block, even though test_3 has a timeout, but since test_3 has been called as a callback function, test_1 content will get printed first
function test_3(callback) {
    setTimeout(() => {
        console.log('Coding is best');
    }, 10000);
    callback();
}
function test_4() {
    console.log('Coding is great');
}
test_3(test_4)