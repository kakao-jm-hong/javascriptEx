// firter() ¸Þ¼­µå

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array = array.filter(function (element, index, array) {
    console.log(index);
    return element <= 5;
});

console.log(array);