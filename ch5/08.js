// 제곱을 구하는 함수
function squere(x) {
    return x * x;
}

// 피타고라스 함수
function pythagoras(width, height) {
    return Math.sqrt(squere(width) + squere(height));
}

// 피타고라스 함수를 호출
console.log(pythagoras(3, 4));

// 삼각형이 직각인지 확인 하는 함수
// squere 함수는 이걸로 덧 쒸워진다.
function squere(width, height, hypotenuse) {
    if (width * width + height * height == hypotenuse * hypotenuse) {
        return true;
    } else {
        return false;
    }
}