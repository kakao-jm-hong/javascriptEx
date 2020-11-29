// 1초마다 함수를 실행합니다.
var intervalID = setInterval(function () {
    console.log('<p>' + new Date() + '</p>');

},1000);

setTimeout(function(){
    clearInterval(intervalID);
},1000);