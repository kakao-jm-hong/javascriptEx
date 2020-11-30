var person = {
    name: '홍정민',
    eat: function (food) {
        console.log(this.name + '이 ' + food + '을/를 먹었습니다.');
    }
}

person.eat('김치');