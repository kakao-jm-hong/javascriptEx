// 배열을 선언합니다.
const originalArray = [1,2,3,4,5];

// 배열을 복제합니다.
const newArray = [...originalArray];

// 원본 배열의 요소를 변경하고 출력합니다.
originalArray[0] = 52;
originalArray[1] = 273;
console.log(originalArray);
console.log(newArray);