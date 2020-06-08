// declare functions
let posX = 0;
let speed = 5;
let y;
let num = 14;

function setup() {
    
    // put setup code here
    let myCanvas = createCanvas(600, 400)
    myCanvas.parent('myContainer')
    noStroke();
    console.log(canvas);
    
}

function draw() {
    
    // put drawing code here
    background(50);
    fill(255);
    ellipse(posX, 175, 50);
    //    console.log(ellipse);
    
    // add the change (speed) to the x position each frame
    posX = posX + speed;
    
    // make ball 'bounce' off edges
    if (posX >= width || posX <= 0) {
        // do something
        speed = speed * -1;
    } else {
        // otherwise, do something else
    }

    // draw green bars
    for(let i = 200; i < width; i += 20) {
        fill(129, 206, 15);
        rect(0, i, width, 10);
    }
    
    // draw white bars
    fill(255);
    y = 60;
    for (let i = 0; i < num / 3; i++) {
        rect(50, y, 475, 10);
        y += 20;
    }
    
    // black bars
    fill(0);
    y = 40;
    for (let i = 0; i < num; i++) {
        rect(405, y, 30, 10);
        y += 20;
    }
    y = 50;
    for (let i = 0; i < num; i++) {
        rect(425, y, 30, 10);
        y += 20;
    }

    // Thin lines
    y = 45;
    fill(0);
    for (let i = 0; i < num - 1; i++) {
        rect(120, y, 40, 1);
        y += 20;
    }

}