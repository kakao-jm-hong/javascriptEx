console.log(typeof ([]));

// array
var array = ['apple', 'banana', 'mago', 'strowBerry'];

// object

var product = {
    제품명: '7D 건조 망고',
    유형: '당절임',
    성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지: '필리핀'
};

console.log(product.성분);

var object = {
    'with space': 273,
    'with - ~!@#$%^&*()_+': 52
};

// 식별자가 아닌 문자키로 햇을경우 배열로 해서 접근 해야한다.
console.log(object["with space"]);
console.log(object["with - ~!@#$%^&*()_+"]);

