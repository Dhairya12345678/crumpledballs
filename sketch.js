
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	


	//Create the Bodies Here.
	ball=Bodies.circle(260,100,radius/2,ball_options)


	Engine.run(engine);
  
	var ball_options
	IsStatic:false
	restituition:0.3
	friction:0
	density:1.2
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
ground.obj.display()
groundObj= new ground(width/2,670,width,20)
leftSide= new ground(1100,600,20,120)
}
function keyPressed()
{
	if (keycode===UP_ARROW)
	{
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
	
}


