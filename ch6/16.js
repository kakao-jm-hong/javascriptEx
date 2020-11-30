// 배열을 선언합니다.
const originalArray = [52, 273, 103, 32, 57];

// 배열을 병합합니다.
const newArrayA = [1, 2, 3, 4, 5, ...originalArray];
const newArrayB = [...originalArray, 1, 2, 3, 4, 5];

// 출력합니다.
console.log(newArrayA);
console.log(newArrayB);