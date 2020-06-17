// module aliases
var Engine = Matter.Engine,
//    Render = Matter.Render,
    World  = Matter.World,
    Bodies = Matter.Bodies;

// declare our global variables
let engine, world;
let circles = [];

function setup() {
    // create canvas and parent to div with myContainer ID in html
    let myCanvas = createCanvas(800, 600);
    myCanvas.parent('myContainer');
    // start physics engine to world object
    engine = Engine.create();
    world  = engine.world;
    
}

// circle template
class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        let options = {
            friction: 0,
            restitution: 0.95
        };
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
        console.log(this.body);
    }
    
    show() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255);
        fill(127);
        ellipse(0, 0, this.r*2);
        pop();
    };
}

function mouseDragged() {
    // make new instance of Circle class and push to circles[] array
    circles.push(new Circle(mouseX, mouseY, random(5, 10)));
}

function draw() {
    background(50);
    // update engine each frame
    Engine.update(engine);
    // for loop to draw circles array to canvas
    for ( let i = 0; i < circles.length; i++) {
        circles[i].show();
    }
}