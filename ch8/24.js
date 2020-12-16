var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = 0;
var output = '';
array.forEach(function (element, index, array) {
    sum += element;
    output += index + ': ' + element + ' -> ' + sum + '\n';
});

console.log(output)