function Rectangle(w, h) {
    // 변수를 선언합니다.
    var width = w;
    var height = h;

    // 메서드를 선언합니다.
    this.getWidth = function () { return width; };
    this.getHeight = function () { return height };
    this.setWidth = function (w) {
        width = w;
    };

    this.setHeight = function (h) {
        height = h;
    };
}

