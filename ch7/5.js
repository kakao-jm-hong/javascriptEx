// 생성자 함수를 선언합니다.
function Student(name, korean, math, english, science) {
    this.이름 = name;
    this.국어 = korean;
    this.수학 = math;
    this.영어 = english;
    this.과학 = science;
}

// 인스턴스를 생성합니다

var student = new Student('홍정민',96,98,92,98);

// 출력합니다.
console.log(student instanceof Student);
console.log(student instanceof Number);
console.log(student instanceof String);
console.log(student instanceof Boolean);