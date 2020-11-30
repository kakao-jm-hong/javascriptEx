var student = {
    이름: '홍정민',
    국어: 92, 수학: 98,
    영어: 96, 과학: 98,
    output: ''
};

var output = '';

// with 키워드를 이용하면 객체를 사용하기 쉽다.
with (student) {
    window.output += "이름" + 이름 + '\n';
    window.output += "수학" + 수학 + '\n';
    window.output += "영어" + 영어 + '\n';
    window.output += "과학" + 과학 + '\n';
}

console.log(output);