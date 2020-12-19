var randomAlphabet = (function () {
    var alphabet = 'ABCDEFGHIZKLMNOPQRSTUVWXYZ';
    return function () {
        return alphabet.charAt(Math.random() * 25);
    }
})();