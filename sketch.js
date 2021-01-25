
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer=new Hammer(200,550,200,50)
   ground1=new Ground(400,600,800,20)
   stone1=new Stone(300,590,70,70)
   rubber1=new Rubber(350,200,20,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  hammer.display();
  ground1.display();
  stone1.display();
  rubber1.display();
  drawSprites();
 
}



