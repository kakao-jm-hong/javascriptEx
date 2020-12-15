var numberFromLiteral = 273;
var numberFromObject = new Number(273);


if(numberFromLiteral.constructor == Number){
    console.log('numberFromLiteral을 숫자입니다.');
}

if(numberFromObject.constructor == Number){
    console.log('numberFromObject는 숫자입니다.');
}