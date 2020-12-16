Date.prototype.getInterval = function (otherDate) {
    // 변수를 선언합니다.
    var interval;

    // 양수로 날짜 간격을 구하려고 조건문을 사용합니다.
    if (this > otherDate) {
        interval = this.getTime() - otherDate.getTime();
    } else {
        interval = otherDate.getTime() - this.getTime();
    }

    // 리턴합니다.
    return Math.floor(interval / (1000 * 60 * 60 * 24));
};

// 변수를 선언합니다.
var now = new Date();
var before = new Date('December 9, 1991');

// 출력합니다.
console.log('Interval: ' + now.getInterval(before) + '일');