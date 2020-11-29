function test(a, b, c, d) {
    console.log(a + ':' + b + ':' + c + ':' + d);
}

var array = [1, 2, 3, 4];
test.apply(null, array);