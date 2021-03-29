const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height+5,1200,40)
    hammer = new Hammer(10,100);
    ball = new Rubber(200,200,30);
    ball1 = new Rubber(1000,Math.round(random()),30);
    iron = new Iron(400,200);
    iron1 = new Iron(700,200);
    stone = new Stone(600,200,50,20)
    stone1 = new Stone(800,200,50,20)
    sand1= new Sand(250,200,8)
    sand2= new Sand(270,200,8)
    sand3= new Sand(290,200,8)

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    textSize(18)
    text("GEOLOGIST PROJECT",300,80)


    plane.display();
    hammer.display();
    ball.display();
    ball1.display();
    iron.display();
    iron1.display();
    stone.display();
    stone1.display();
    sand1.display();
    sand2.display();
    sand3.display();
    
 
}