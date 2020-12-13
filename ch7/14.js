function Square(length) {
    this.base = Rectangle;
    this.base(length, length);
}

Square.prototype = Rectangle.prototype;
 