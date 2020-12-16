function A(a, b) {
    this.a = a;
    this.b = b;
}

var array = [];

array.push(new A(2, 4));
array.push(new A(1, 4));
array.push(new A(6, 1));
array.push(new A(3, 8));

console.log('before sort')
for (key in array) {
    console.log(array[key]);
}

// sort

array.sort(function (left, right) {
    return left.a - right.b;
});
console.log('\nafter sort');

for (key in array) {
    console.log(array[key]);
}