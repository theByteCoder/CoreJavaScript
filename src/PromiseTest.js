var val = 3;
var res = new Promise( (resolve, reject) => {
    if(val == 2) {
        resolve()
    } else {
        reject()
    }
})

res.then(() => {
    console.log("Value is 2");
}).catch(() => {
    console.log("Value is NOT 2");
})