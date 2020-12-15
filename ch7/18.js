class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    set width(input) {
        this._width = input;
    }

    get height() {
        return this._heigth;
    }

    set height(input) {
        return this._heigth = input;
    }

    getArea() {
        return this._width * this._height;
    }
}

const rectangle = new Rectangle(100, 200);
rectangle.width = 200;

console.log(rectangle.width);
console.log(rectangle.getArea());

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
        console.log(this);
    }

    set width(input) {
        this._width = input;
        this._height = input;
    }

    set height(input) {
        this._width = input;
        this._height = input;
    }
}

const square = new Square(100);
console.log(square.getArea());