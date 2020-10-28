const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine,world

function setup() {
  createCanvas(1150,700);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  
  stand1 = new Ground(750, 570, 40, 20);
  stand2 = new Ground (620, 450, 30, 10);

  block1 = new Box(730,560,10,10)
  block2 = new Box(740,560,10,10)
  block3 = new Box(750,560,10,10)
  block4 = new Box(735,550,10,10)
  block5 = new Box(740,550,10,10)
  block6 = new Box(730,540,10,10)
  block7 = new Box(450,320,10,10)
  block8 = new Box(470,560,10,10)
  block9 = new Box(490,560,10,10)
  block10 = new Box(510,560,10,10)
  block11 = new Box(530,560,10,10)
  block12 = new Box(550,560,10,10)

  polygon = Bodies.circle(50,200,20)
  World.add(world,polygon);

  slingShot = new SlingShot (this.polygon,{x:100,y:200});

}

function draw() {

  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  slingShot.display();

  background(255,255,255);  
  drawSprites();
}

function mouseDragged(){
  
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
  
}