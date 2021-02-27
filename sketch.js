const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1, stand2;
var block1,block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;

var piece1, piece2, piece3, piece4, piece5;
var piece6, piece7, piece8;
var piece9;

var polygon, polygonImg;

var sling;
var score = 0;

var bg;

function preload(){
    polygonImg = loadImage("polygon.png");
}


function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    stand1= new Ground(570,500,280,20);
    stand2= new Ground(860,300,230,20);

    //level1
    block1= new Box(480,470,30,40);
    block2= new Box(510,470,30,40);
    block3= new Box(540,470,30,40);
    block4= new Box(570,470,30,40);
    block5= new Box(600,470,30,40);
    block6= new Box(630,470,30,40);
    block7= new Box(660,470,30,40);

    //level2
    block8= new Box(510,430,30,40);
    block9= new Box(540,430,30,40);
    block10= new Box(570,430,30,40);
    block11= new Box(600,430,30,40);
    block12= new Box(630,430,30,40);

    //level 3
    block13= new Box(540,390,30,40);
    block14=new Box(570,390,30,40);
    block15= new Box(600,390,30,40);

    //level 4
    block16= new Box(570,350,30,40);

    
    polygon= Bodies.circle(200,500,20);
    World.add(world,polygon);

    console.log(polygon);

  sling= new SlingShot(polygon, {x:150, y: 450});

  //set2

  //level 1

  piece1= new Box(800,250,30,40);
  piece2=new Box(830,250,30,40);
  piece3=new Box(860,250,30,40);
  piece4= new Box(890,250,30,40);
  piece5= new Box(920,250,30,40);

  //level2
piece6= new Box(830,210,30,40);
piece7= new Box(860,210,30,40);
piece8= new Box(890,210,30,40);

//level3
piece9= new Box(860,170,30,40);
  

    

}

function draw(){
    if(bg){
    background(bg);
    }
    text("SCORE: "+ score,750,40);
    getTime();

    Engine.update(engine);
    stand1.display();
    stand2.display();

    fill("lightblue");
    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();

    piece1.display();
    piece1.score();
    piece2.display();
    piece2.score();
    piece3.display();
    piece3.score();
    piece4.display();
    piece4.score();
    piece5.display();
    piece5.score();

    fill("lightpink");
    block8.display();
    block8.score();
    block9.display();
    block9.score();
    block10.display();
    block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();

    piece6.display();
    piece6.score();
    piece7.display();
    piece7.score();
    piece8.display();
    piece8.score();

    fill("blue");
    block13.display();
    block13.score();
    block14.display();
    block14.score();
    block15.display();
    block15.score();

    piece9.display();
    piece9.score();

    fill("red");
    block16.display();
    block16.score();

    var angle = polygon.angle;

    
    posX=polygon.position.x;
    posY=polygon.position.y;
    
    imageMode(CENTER);
    image(polygonImg,posX,posY,50,50);
    
    

    sling.display();

    drawSprites();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode===32){
    sling.attach(polygon);
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);
    if(hour>=6 && hour<=18){
        bg="orange";
    }
    else
    bg="black";
}