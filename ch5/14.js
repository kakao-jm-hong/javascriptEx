// 1�ʸ��� �Լ��� �����մϴ�.
var intervalID = setInterval(function () {
    console.log('<p>' + new Date() + '</p>');

},1000);

setTimeout(function(){
    clearInterval(intervalID);
},1000);