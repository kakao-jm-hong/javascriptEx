var startTime = new Date().getTime();

for (var cps = 0; new Date().getTime() < startTime + 1000; cps++) { }
console.log('초 당 연산 횟수: ' + cps);