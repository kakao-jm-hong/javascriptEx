function sumAll(){
    var output = 0;
    for (var i = 0; i<arguments.length;i++){
        output += arguments[i];
    }
    return output;
}

console.log(sumAll(1,2,3,4,5,6,7,8,9,10));