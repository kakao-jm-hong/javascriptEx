var numberFromLiteral = 273;
var NumberFromObject = new Number(273);


if(typeof (numberFromLiteral) == 'number'){
    console.log('numberFromLiteral을 숫자입니다.');
}

if(typeof(numberFromObject) == 'number'){
    console.log('numberFromObject는 숫자입니다.')
}