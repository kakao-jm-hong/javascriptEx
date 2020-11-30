var student = {
    이름: '연하진',
    국어: 92, 수학: 98,
    영어: 96, 과학: 98
};

var output = '';

output += "'이름' in student : " + ('이름' in student) + '\n';
output += "'성별' in student : " + ('성별' in student);

console.log(output);