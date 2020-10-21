
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
roof=new Roof(width/2,height/4,width/7,20)
	//Create the Bodies Here.
Bob1=new Bob(width/2-80,height/4+500,40)
Bob2=new Bob(width/2-40,height/4+500,40)
Bob3=new Bob(width/2,height/4+500,40)
Bob4=new Bob(width/2+40,height/4+500,40)
Bob5=new Bob(width/2+80,height/4+500,40)
Chain1= new Chain(Bob1.body,roof.body,-80,0)
Chain2= new Chain(Bob2.body,roof.body,-40,0)
Chain3= new Chain(Bob3.body,roof.body,0,0)
Chain4= new Chain(Bob4.body,roof.body,40,0)
Chain5= new Chain(Bob5.body,roof.body,80,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(144,144,144);
  
roof.display()
 Bob1.display()
 Bob2.display()
 Bob3.display()
 Bob4.display()
 Bob5.display()
 Chain1.display()
 Chain2.display()
 Chain3.display()
 Chain4.display()
 Chain5.display()
}
function drawLine(constraint){
	BobBodyposition=constraint.bodyA.position
	RoofBodyposition=constraint.bodyB.position
	RoofBodyOffSet=constraint.pointB
RoofBodyX=RoofBodyposition.x+RoofBodyOffSet.x
RoofBodyY=RoofBodyposition.y+RoofBodyOffSet.y
line(BobBodyposition.x,BobBodyposition.y,RoofBodyX,RoofBodyY)
}
function keyPressed(){
	if(keyCode=32){
   Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-50,y:-45})}
}

