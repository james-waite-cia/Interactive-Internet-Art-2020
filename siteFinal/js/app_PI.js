let drawImage, imgWidth, imgHeight;
let flowers = [];

function preload() {
    for (let i = 0; i < 3; i++) {
        flowers[i] = loadImage('img/flower' + i + '.png');
    }
}

function setup() {
    let myCanvas = createCanvas(800, 600);
    myCanvas.parent('myContainer');
    background(50);
    drawImage = flowers[0];
    imgWidth = 50;
    imgHeight = 50;
}

function draw() {
    //
}

function changeImage(value) {
    drawImage = flowers[value];
}

function mouseDragged() {
    image(drawImage, mouseX - (imgWidth / 2), mouseY - (imgHeight / 2), imgWidth, imgHeight);
}

