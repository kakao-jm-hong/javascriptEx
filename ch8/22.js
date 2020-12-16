var now = new Date();
var before = new Date('December 9, 1991');

var interval = now.getTime() - before.getTime();

// 숫자 인수보다 작거나 같은 가장 큰 정수를 반환합니다.
// Returns the greatest integer less than or equal to its numeric argument.
interval = Math.floor(interval / (1000 * 60 * 60 * 24));

console.log('Interval: ' + interval + '일');