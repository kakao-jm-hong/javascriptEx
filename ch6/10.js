function test(options){
    // 옵션 객체를 초기화합니다.
    options.valueA = options.valueA || 10;
    options.valueB = options.valueB || 20;
    options.valueC = options.valueC || 30;

    // 출력합니다.
    console.log(options.valueA + ':'+ options.valueB +':'+options.valueC);
}

test({
    valueA : 52,
    valueC : 273
})