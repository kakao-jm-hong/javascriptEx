window.onload = function () {
    var header = document.createElement('h1');
    var textNode = document.createTextNode('Hello DOM');

    header.appendChild(textNode);
    document.body.appendChild(header);
};