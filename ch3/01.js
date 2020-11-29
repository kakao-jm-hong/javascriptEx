// 변수를 선언합니다
var date = new Date();
var hour = date.getHours;

// if 조건문
if(hour<12){
    console.log('오전입니다');
}else{
    console.log('오후입니다.');
}