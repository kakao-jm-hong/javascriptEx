for (var i = 0; i < 3; i++) {
    var f = (function (closed_i){
        setTimeout(() => {
            console.log(closed_i);
        }, 0);
    });
    f(i);
}