Object.prototype.test = function(){
    console.log(this);
};

var number = 273;
number.test();