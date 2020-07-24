
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;

var paper,ground1;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400,680,800,40);
	//World.add(world,ground1)

	paper = new cPaper(50,50,15);
	//World.add(world, paper)

	carrier = new Carrier(700,575,100,170);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  ground1.display();
  //carrier1.display();
	//carrier2.display();
	//carrierF.display();
	carrier.display();
	
  drawSprites();
}
keyPressed();
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:700,y:-640});
	}
	 /* if(paper.body.position.x > 450){
		Body.applyForce(paper.body,paper.body.position,{x:0,y:80});
	}  */
}


