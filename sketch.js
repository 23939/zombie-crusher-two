const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var stones=[]
var breakButton


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground=new base(0,height-10,width*2,20,"#795548",true)
  leftWall=new base(300,height/2+50,600,100,"#8d6e63",true)
  rightWall=new base(width-300,height/2+50,600,100,"#8d6e63",true)
  joinPoint=new base(width-600,height/2+10,40,20,"#8d6e63",true)
  bridge=new Bridge(15,{x:width/2-400,y:height/2})
  Matter.Composite.add(bridge.body,joinPoint)
  joinLink=new link(bridge,joinPoint)
  for(var i=0;i<=8;i++){
    var X=random(width/2-200,width/2+300)
    var Y=random(-10,140)
    var S=new stone(X,Y,80,80)
    stones.push(S)
  }
}

function preload() {
  var zombie1 = loadImage("./assets/zombie.png")
   var zombie2 = loadImage("./assets/zombie.png")

  var zombie3 = loadImage("./assets/zombie.png")
   var zombie4 = loadImage("./assets/zombie.png")

  backgroundImage = loadImage("./assets/background.png")
  
  zombie = createSprite(width / 2, height - 110);
  zombie.addAnimations("lefttoright",zombie1,zombie2,zombie1);
  zombie.addAnimations("righttoleft",zombie3,zombie4,zombie3);
  zombie.scale = 0.1;
  zombie.velocityX = 10;

  breakButton = creatutton("")
  breakButton.position(width - 200,height /2 - 50);
  breakButton.class("breakbutton");
  breakButton.mousePressed(handleButtonPress);
}

function draw() {
  background(51);
  Engine.update(engine);
  ground.show()
  leftWall.show()
  rightWall.show()
  joinPoint.show()
  bridge.show()
  for(var S of stones){
    S.show()
  }
  breakButton.display()
}

function breakButton() {
  
}
