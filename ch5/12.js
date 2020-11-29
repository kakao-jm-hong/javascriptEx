function test(name){
    var output = 'Hello' + name + '...!';
    return function(){
        console.log(output);
    };
}

test('JavaScript')();