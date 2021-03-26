const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;
var pig;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   ground = new Ground(600,height,1200,20);
     
  box1 = new Box(700,320,70,70) ;
  box2= new Box(920,320,70,70);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,80,80);
  pig = new Pig(810,350) ;
  log = new Log (810,260,300,PI/2)
      
  pig2 = new Pig(810,220) ;
  log2 = new Log (810,180,300,PI/2)
 box5 = new Box (810,160,70,70)
 log3 = new Log (760,120,150,PI/7)   
 log4 = new Log (870,120,150,-PI/7)
  bird = new Bird(200,200)    
}

function draw(){
    background("grey");
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig.display();
    log.display();
    pig2.display();
    log2.display();
    log3.display(); 
    log4.display();
    bird.display();
    ground.display();
} 