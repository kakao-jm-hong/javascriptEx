var object={
    name: 'object',
    prop : 'object',
    toJSON: function(){
        return {
            custom : 'custom'
        };
    }
}

console.log(JSON.stringify(object));