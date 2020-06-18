// module aliases
var Engine = Matter.Engine,
//    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// declare global variables
let engine, world;
let circles = [];
let boundaries = [];

let ground;

function setup() {
    // create canvas and parent to div with myContainer ID in html
    let myCanvas = createCanvas(800, 600);
    myCanvas.parent('myContainer');
    // start physics engine to world object
    engine = Engine.create();
    world = engine.world;
    //Engine.run(engine);
    
    // make new instance of Boundary class and push to boundaries array
    boundaries.push(new Boundary(200, 200, width * 0.4, 20, 0.3));
    boundaries.push(new Boundary(600, 400, width * 0.4, 20, -0.3));
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

// boundary template
class Boundary {
    constructor(x, y, w, h, a) {
        this.w = w;
        this.h = h;
        let options = {
            friction: 0,
            restitution: 0.95,
            angle: a,
            isStatic: true
        };
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }
    
    show() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        noStroke();
        fill(0);
        rect(0, 0, this.w, this.h);
        pop();
    };
}

function mouseDragged() {
    // make new instance of Circle class and push to circles array
    circles.push(new Circle(mouseX, mouseY, random(5, 10)));
}

function draw() {
    background(50);
    // update engine each frame
    Engine.update(engine);
    // draw circles array
    for (let i = 0; i < circles.length; i++) {
        circles[i].show();
    }
    // draw boundaries array
    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }
}