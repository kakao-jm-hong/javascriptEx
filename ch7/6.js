function Student(name, korean, math, english, science){
    this.이름 =  name;
    this.국어 = korean;
    this.수학 = math;
    this.영어 = english;
    this.과학 = science;
}

Student.prototype.getSum = function(){};
Student.prototype.getAvarage = function(){};
Student.prototype.gettoString = function(){};