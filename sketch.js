const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies  

var dividers = [];
var Plinkos = [];
var balls = [];
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width, 20);

  // for loop for divider
  var i = 0;
  for(var x = 0;x<=width;x=x+width/8){
    dividers[i] = new Dividers(x,height*7/8-20,20,height*9/32);
    i++;
  }
  dividers[0]=new Dividers(0,height/2-20,20,height);
  dividers[8]=new Dividers(width,height/2-20,20,height);

// for loop for balls
  var a = 0;
  for(var x = width/15+5;x<=width-width/20;x = x+width/20){
    Plinkos[a] = new Plinko(x,40);
    a++;
  }
  for(var x =  width/20;x< width-width/25;x = x+ width/20){
    Plinkos[a] = new Plinko(x,90);
    a++;
  }
  for(var x = width/15+5;x<=width-width/20;x = x+width/20){
    Plinkos[a] = new Plinko(x,140);
    a++;
  }
  for(var x =  width/20;x< width-width/25;x = x+ width/20){
    Plinkos[a] = new Plinko(x,190);
    a++;
  }
  for(var x = width/15+5;x<=width-width/20;x = x+width/20){
    Plinkos[a] = new Plinko(x,240);
    a++;
  }
 //for loop for balls
var b = 0;
for(var x =  width/25;x< width;x = x+ width/50){
  balls[b] = new Ball(x,20);
  b++;
}
/*
if (frameCount% 60 === 0){
  balls.push(new Ball(random(width/2 -30,width/2 +30),10));
}
*/
}

function draw() {
  background("black");  
  drawSprites();

  Engine.update(engine);
  for(var i = 0;i<9;i++){
    dividers[i].display();
  }
  for(var a = 0;a<92;a++){
    Plinkos[a].display();
  }

  for(var b = 0;b<45;b++){
    balls[b].display();
  }
  ground.display();
}