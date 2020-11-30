var students = [];

students.push({ 이름: 'a', 국어: 1, 수학: 12, 영어: 23, 과학: 34 });
students.push({ 이름: 'b', 국어: 2, 수학: 13, 영어: 24, 과학: 35 });
students.push({ 이름: 'c', 국어: 3, 수학: 14, 영어: 25, 과학: 36 });
students.push({ 이름: 'd', 국어: 4, 수학: 15, 영어: 26, 과학: 37 });
students.push({ 이름: 'e', 국어: 5, 수학: 16, 영어: 27, 과학: 38 });
students.push({ 이름: 'f', 국어: 6, 수학: 17, 영어: 28, 과학: 39 });
students.push({ 이름: 'g', 국어: 7, 수학: 18, 영어: 29, 과학: 40 });
students.push({ 이름: 'h', 국어: 8, 수학: 19, 영어: 30, 과학: 41 });
students.push({ 이름: 'i', 국어: 9, 수학: 20, 영어: 31, 과학: 42 });
students.push({ 이름: 'j', 국어: 10, 수학: 21, 영어: 32, 과학: 43 });
students.push({ 이름: 'k', 국어: 11, 수학: 22, 영어: 33, 과학: 44 });

for (var i in students) {
    students[i].getSum = function () {
        return this.국어 + this.수학 + this.영어 + this.과학;
    }

    students[i].getAverage = function () {
        return this.getSum() / 4;
    }
}

var output = '이름\t총점\t평균\n';
for (var i in students) {
    with (students[i]) {
        output += 이름 + '\t' + getSum() + '\t' + getAverage() + '\n';
    }
}

console.log(output);