// javascript 는 좌변이 확실하면은 우변을 실행하지 않는다.
// 대부분의 논리연산이 이 법칙을 따르고 있음.
true || console.log('A');
false || console.log('B');