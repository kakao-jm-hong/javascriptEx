function test(a, b, c) {
    if (!b) { b = 52; }
    if (!c) { c = 273; }

    console.log(a + ':' + b + ':' + c);
}
test(1, 2);