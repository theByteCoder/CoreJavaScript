var obj = {
    1 : 1,
    2 : 2,
    func : function(){
        return 3;
    }
};
console.log(obj.func());

obj.newFunc = () => {
    return 4;
}
console.log(obj.newFunc());
