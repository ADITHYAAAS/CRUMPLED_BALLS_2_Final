var paper1;
var box1, box2, box3;
var ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

  paper1 = new Paper(100,400,70);
	ground1 = new Ground( 600, 650, 1400, 10);
  box1 = new Box(1200,535,200,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.run(engine);
  paper1.display(); 
  ground1.display();
  box1.display(); 
  keyPressed();
  drawSprites(); 
}

function keyPressed() {
    if (keyCode === UP_ARROW){

        Matter.Body.applyForce(paper1.body,paper1.body.position,{x: 500,y: -500});   

    }
}
