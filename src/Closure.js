var outFunc = (outerVal) => {
    var innerFunc = (innerVal) => {
        return outerVal + innerVal;
    }
    return innerFunc;
};

let seeWhatsReturned = outFunc(1);
console.dir(seeWhatsReturned);
seeWhatsReturned = seeWhatsReturned(2);
console.dir(seeWhatsReturned);