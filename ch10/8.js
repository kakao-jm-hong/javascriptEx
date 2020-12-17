window.onload = function () {
    var img = document.createElement('img');
    img.setAttribute('src', 'Penguins.jpg');
    img.setAttribute('width', 500);
    img.setAttribute('height', 350);

    img.setAttribute('data-property', 350);

    document.body.appendChild(img);
};