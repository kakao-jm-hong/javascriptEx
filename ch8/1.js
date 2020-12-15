var primitiveNumber = 273;
var objectNumber = new Number(273);

var output = '';
output += typeof(primitiveNumber) + ' : ' + primitiveNumber +'\n';
output += typeof (objectNumber) + ' : ' + objectNumber;
console.log(output);