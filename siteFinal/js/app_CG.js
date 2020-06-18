let bubbles = [];

function setup() {
    let myCanvas = createCanvas(800, 600);
    myCanvas.parent('myContainer');
}

function mousePressed() {
    let r = random(10, 40);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
    console.log(bubbles);
}

function draw() {
    background(50);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
//        noStroke();
//        fill(255, 10);
        ellipse(this.x, this.y, this.r * 2);
    }
}