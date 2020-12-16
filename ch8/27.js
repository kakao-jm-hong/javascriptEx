var array = [1,2,4,5,6,7,8,9,10];

function lessThanFive(element, index, array){
    return element < 5;
}

function lessThanTwenty(element,index,array){
    return element < 20;
}

var output1 = array.every(lessThanFive);
var output2 = array.every(lessThanTwenty);
var output3 = array.some(lessThanFive);
var output4 = array.some(lessThanTwenty);

console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);