const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rect1,rect2,rect3;
var Ground1;
var ball,ball2,ball3;

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;



  rect1 = new Rect1(240,350,200,40);

  rect2 = new Rect1 (200,350,200,25);
  rect3 = new Rect1 (200,350,200,20);
  
  Ground1 = new Ground(600,380,1200,20);
  ball1 = new Ball(600, 225, 20);
  ball2 = new Ball(700, 250, 20);
  ball3 = new Ball(500, 275, 20);
}

function draw(){
  background("Green");

  Engine.update(engine);
  rect1.display();
  rect2.display();
 rect3.display();
  Ground1.display();
ball1.display();
ball2.display();
ball3.display();

}