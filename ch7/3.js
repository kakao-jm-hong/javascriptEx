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

var student = new Student('���ϸ�', 96, 98, 92, 98);