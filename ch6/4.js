var product = {
    name: 'Microsoft Visual Studio 2020 Ultimate',
    price: '15,000,000원',
    lanaguage: '한국어',
    supportOS: 'Win 32/64',
    subscription: true
};

var output = '';

for (var key in product) {
    output += '●' + key + ': ' + product[key] + '\n';
}

console.log(output);