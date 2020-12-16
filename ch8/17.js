Array.prototype.remove = function (index) { this.splice(index, 1); }

var array = [52, 273, 103, 32, 274, 129];

for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] > 100) {
        array.remove(i);
    }
}

console.log(array);