const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies;

var drops;
var dropsarray=[];
var maxdrops= 300;

var Walkerimg,walker;

function preload(){
    Walkerimg=loadImage("WalkingMan/walking_8.png")    
}

function setup(){
    engine = Engine.create();
     world = engine.world;

     moon=createSprite(340,40,40,40);
     moon.shapeColor="white"
     walker=createSprite(200,265);
     walker.addImage(Walkerimg);
     walker.scale=0.4
     walker =new Walker(200,237)

if(frameCount%150===0){
    for(var i=0;i<maxdrops;i=i+1){
        dropsarray.push(new Rain(random(0,400),random(0,300)))
    }
}    
}

function draw(){

    Engine.update(engine);
     background(0);

    for(var i=0;i<maxdrops;i=i+1){
        dropsarray[i].display()
        dropsarray[i].rerain()
    } 
    walker.display();  
    drawSprites()
}  


