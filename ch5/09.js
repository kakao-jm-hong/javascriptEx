function pythagoras(width, height) {
    function square(x) {
        return x * x;
    }
    return Math.sqrt(square(width) + square(height));
}

console.log(pythagoras(3,4));