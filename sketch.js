var paper,ground,dustbin1,dustbin2,dustbin3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin
const Render = Matter.Render
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper()
	ground=new Ground()
    dustbin=new Dustbin()	
    

	
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } }); Engine.run(engine); Render.run(render);

  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paper.display();
  ground.display();
 dustbin.display();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:65});
	}
}
