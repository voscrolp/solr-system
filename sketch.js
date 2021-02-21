
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var sun,earth;

function preload(){
	sun = loadImage('sprites/sun.png');
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	earth = new Earth(width/2,100,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  imageMode(CENTER);
  image(sun,width/2,height/2,100,100);

  earth.display();
  earth.move();
  
  drawSprites();
 
}



