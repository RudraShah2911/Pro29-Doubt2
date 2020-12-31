const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground 
var box8, box9, box10, box11, box12, box13, box14, box15, box16

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (600,270,200,20)

    box8 = new Box (330,235,30,40)

}

function draw(){
    background("black")

    ground.display();


}

function mouseDragged(){
    Matter.Body.setPosition (polygon.body, {x : mouseX, y : mouseY})
}

function mouseReleased(){
    slingShot.fly()
}