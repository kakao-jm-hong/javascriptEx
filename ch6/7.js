var student = {};

student.이름 = '홍정민';

student.취미 = '악기';
student.특기 = '프로그래밍';
student.장래희망 = '생명공학자';

student.toString = function () {
    var output = '';
    for (var key in this) {
        if (key != 'toString'){
            output += key + '\t' + this[key] + '\n';
        }
    }

    return output;
};

console.log(student.toString());

delete(student.장래희망);

console.log(student);
