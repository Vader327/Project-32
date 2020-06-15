const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;
var backgroundImg;

function preload() {
  getBGImage();
}

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  score_title = createElement("h3");
  title = createElement("h3");
  
  ground = new Ground(600,height,1200,20);
  stand = new Ground(400, 355, 300, 10);

  ball = new Ball(150, 300, 15);
  slingshot = new SlingShot(ball.body, {x:150, y:300});

  block1 = new Block(280, 330, 40, 40, choose());
  block2 = new Block(340, 330, 40, 40, choose());
  block3 = new Block(400, 330, 40, 40, choose());
  block4 = new Block(460, 330, 40, 40, choose());
  block5 = new Block(520, 330, 40, 40, choose());
  block6 = new Block(310, 290, 40, 40, choose());
  block7 = new Block(370, 290, 40, 40, choose());
  block8 = new Block(430, 290, 40, 40, choose());
  block9 = new Block(490, 290, 40, 40, choose());
  block10 = new Block(340, 250, 40, 40, choose());
  block11 = new Block(400, 250, 40, 40, choose());
  block12 = new Block(460, 250, 40, 40, choose());
  block13 = new Block(370, 210, 40, 40, choose());
  block14 = new Block(430, 210, 40, 40, choose());
  block15 = new Block(400, 170, 40, 40, choose());
  block16 = new Block(700, 370, 40, 40, choose());
  block17 = new Block(700, 330, 40, 40, choose());
  block18 = new Block(700, 290, 40, 40, choose());
  block19 = new Block(700, 250, 40, 40, choose());  
  block20 = new Block(700, 210, 40, 40, choose());
  block21 = new Block(700, 170, 40, 40, choose());
  block22 = new Block(700, 130, 40, 40, choose());
  block23 = new Block(650, 370, 40, 40, choose());
  block24 = new Block(650, 330, 40, 40, choose());
  block25 = new Block(650, 290, 40, 40, choose());
  block26 = new Block(650, 250, 40, 40, choose());  
  block27 = new Block(650, 210, 40, 40, choose());
  block28 = new Block(650, 170, 40, 40, choose());
  block29 = new Block(650, 130, 40, 40, choose());
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
  }

  Engine.update(engine);

  title.html("Destroy!");
  title.elt.id = "destroy";
  title.position(525, 10);

  score_title.html("Score: " + score);
  score_title.elt.id = "title";
  score_title.position(535, -10);

  if(score>200){
    title.elt.id = "destroyed";
  }
  
  ground.display();
  stand.display();

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
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();

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
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  block28.score();
  block29.score();
  
  slingshot.display();
  ball.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function choose(){
  var rand = Math.round(random(1,5));
  var color;
  if(rand===1){
    color = ("rgb(0, 204, 255)");
  }
  if(rand===2){
    color = ("#f54f49");
  }
  if(rand===3){
    color = ("#69e25e");
  }
  if(rand===4){
    color = ("#ffdf2c");
  }
  if(rand===5){
    color = ("orange");
  }
  return(color);
}

function keyPressed(){
  if(keyCode===32 && ball.body.speed < 3){
    Matter.Body.setAngle(ball.body, 0);
    Matter.Body.setPosition(ball.body, {x: 150 , y: 300});
    slingshot.attach(ball.body);
  }
}

async function getBGImage(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=6 && hour<=18){
    backgroundImg = loadImage("day.jpg");
  }
  else{
    backgroundImg = loadImage("night.jpg");
  }
}
