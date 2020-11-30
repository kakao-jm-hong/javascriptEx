// 배열을 선언합니다
const originalObject = {
    name: '홍정민',
    birthDay: new Date(2016, 12 - 1, 9).toString()
};

// 배열을 복제합니다.
const newObject = { ...originalObject };