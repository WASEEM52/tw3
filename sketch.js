const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
var score = 0;
var backgroundImg,bg;
 
function preload(){
  polygon_img=loadImage("polygon.png");
  getTime();
}
function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks17 = new Block(640,175,30,40);
  blocks18 = new Block(670,175,30,40);
  blocks19= new Block(700,175,30,40);
  blocks20= new Block(730,175,30,40);
  blocks21= new Block(760,175,30,40);
  //level two
  blocks22= new Block(670,135,30,40);
  blocks23 = new Block(700,135,30,40);
  blocks24= new Block(730,135,30,40);
  //top
  blocks25= new Block(700,95,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  if(backgroundImg)
 
  background(backgroundImg);
  Engine.update(engine);

  textsize(20);
  fill("white");
  text("Score:"+score,150,50);

  text(mouseX + ',' + mouseY, 10, 15);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("lightblue");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("pink");
  block13.display();
  block14.display();
  block15.display();
  fill("black");
  block16.display();
  fill("skyblue");
  blocks17.display();
  blocks18.display();
  blocks19.display();
  blocks20.display();
  blocks21.display();
  fill("lightgreen");
  blocks22.display();
  blocks23.display();
  blocks24.display();
  fill("lime")
  blocks25.display();

//score;
block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();

block8.score();
block9.score();
block10.score();
block11.score();
block12.score();

block13.score();
block14.score();
block15.score();

block16.score();

blocks17.score();
blocks18.score();
blocks19.score();
blocks20.score();
blocks21.score();

blocks22.score();
blocks23.score();
blocks24.score();

blocks25.score();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}

async function getTime(){
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);
  console.log(hour);

  if(hour >= 06 && hour <= 18){
    bg = rgb(255,153,51);
  } else{
    bg = rgb(55, 43, 43);
  }

  backgroundImg = bg;
}
