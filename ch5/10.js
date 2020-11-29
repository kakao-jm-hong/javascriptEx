//함수자체를 하나의 값으로 사용함.
function callTenTimes(callback) {
    for (var i = 0; i < 10; i++) {
        callback();
    }
}

var callback = function(){
    console.log('함수호출');
};

callTenTimes(callback);
