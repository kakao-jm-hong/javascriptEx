var object ={
    name : '윤인성',
    region: '서울특별시'
};

console.log(JSON.stringify(object));

var copy = JSON.parse(JSON.stringify(object));
console.log(copy);