var stringFromLiteral = 'Hello World...!';
var stringFromConstructor = new String('Hello World..!');

var output = '';
output += typeof (stringFromLiteral) + '\n';
output += typeof (stringFromConstructor);
console.log(output);
