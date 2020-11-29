function test(a, b, c, d) {
    console.log(`${a}:${b}:${c}:${d}`);
}

var array = [1, 2];

test(273, 52, ...array);

test(...array, ...array);