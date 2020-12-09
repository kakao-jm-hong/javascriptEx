// 생성자 함수를 선언합니다.
function Square(length){
    this.width = length;
    this.length = length;
}

Square.prototype.getArea = function(){
    return this.getWidth() * this.getHeight();
}