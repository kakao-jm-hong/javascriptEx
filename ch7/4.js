function Student(name, korean, math, english, science) {
    this.�̸� = name;
    this.���� = korean;
    this.���� = math;
    this.���� = english;
    this.���� = science;


    this.getSum = function () {
        return this.���� + this.���� + this.���� + this.����;
    };

    this.getAverage = function () {
        return this.getSum() / 4;
    };

    this.toString = function () {
        return this.�̸� + '\t' + this.getSum() + '\t' + this.getAverage();
    };

}

// �л� ���� �迭�� ����ϴ�.
var students = [];
students.push(new Student('���ϸ�',96,98,92,98));
students.push(new Student('���ξ�',96,96,98,92));

// ����մϴ�.
var output = '�̸�\t����\t���\n';
for(var i in students){
    output += students[i].toString() + '\n';
}

alert(output);