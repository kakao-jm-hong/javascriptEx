var now = new Date();
var before = new Date('December 9, 1991');

var interval = now.getTime() - before.getTime();
interval = Math.floor(interval / (1000 * 60 * 60 * 24));

console.log('Interval: ' + interval + '일');