const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options={
    isStatic:true
  }
// rectangle object created
  ground=Bodies.rectangle(200,380,200,10, ground_options);
  var ball_option={
    restitution:1
  }
  ball=Bodies.circle(200,100,30,ball_option);
  World.add(world, ground);
  World.add(world,ball);
console.log(ball);
  
}

function draw() {
  background("black");
  Engine.update(engine);  
  rectMode(CENTER)
  rect (ground.position.x,ground.position.y,400,10)
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,30)
  drawSprites();
}