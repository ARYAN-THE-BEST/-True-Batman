class Rain{

constructor(x,y){
var options={
     friction:0.001,
     restitution:0.1
}
this.rain=Bodies.circle(x,y,2,options)
this.radius=4
World.add(world,this.rain);
}
display(){
fill("blue")
ellipseMode(CENTER);
ellipse(this.rain.position.x,this.rain.position.y,this.radius);

}
rerain(){
if(this.rain.position.y>height){
    Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,200)})

}

}

}