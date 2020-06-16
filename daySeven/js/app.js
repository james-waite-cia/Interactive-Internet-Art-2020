let img;
let shapes = [];

function preload() {
    img = loadImage('img/First_color_image_of_the_earth_from_outer_space_(Dodge_Satellite).png');
}

function setup() {
    let myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent('myContainer');
    
    noStroke();
    rectMode(CENTER);
}

function draw() {
//  color(r, g, b, t);
    tint(0, 153, 204, 128)
    background(img);
    
    fill(244, 122, 158, 128);
    rect(mouseX, height / 2, mouseY / 2 + 10, mouseY / 2 + 10);
    fill(237, 34, 93, 128);
    let inverseX = width - mouseX;
    let inverseY = height - mouseY;
    rect(inverseX, height / 2, inverseY / 2 + 10, inverseY / 2 + 10);
}