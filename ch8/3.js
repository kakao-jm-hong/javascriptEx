var primitiveNumber = 273;
var objectNumber = new Number(273);

Number.prototype.method =  function() {
    return 'Method on Prototype';
}

var output = '';

output += primitiveNumber.method() +'\n';
output += objectNumber.method();

console.log(output);