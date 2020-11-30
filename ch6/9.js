function makeStudent(name, korean, math, english, science) {
    var willReturn = {
        이름: name,
        국어: korean,
        수학: math,
        영어: english,
        과학: science,

        getSum: function () {
            return this.국어 + this.수학 + this.영어 + this.과학;
        },
        getAverage: function () {
            return this.getSum() / 4;
        },
        toString: function () {
            return this.이름 + '\t' + this.수학 + '\t' + this.영어 + '\t' + this.과학;
        }
    };
    return willReturn;
}

var students = [];

students.push(makeStudent('홍정민',89,23,15,12));
students.push(makeStudent('이윤열',89,23,15,12));

for(var i in students){
    console.log(students[i].toString());
}