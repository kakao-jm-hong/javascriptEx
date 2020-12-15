var object = new Object();

console.log(object);
console.log(object.toString());

var student = {
    name: '윤명월',
    grade: '대학교 1학년',
    toString: function(){
        return this.name + ' : '+ this.grade;
    }
};

console.log(student);