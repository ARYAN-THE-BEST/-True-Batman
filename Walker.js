class Walker{

    constructor(x,y){
       var options={
        isStatic:true,
        friction:0.001,
     restitution:0.1
       }

       this.walker=Bodies.circle(x,y,100,options)
       this.radius=100
      World.add(world,this.walker);     
    }
    display(){
        
        fill(0)
        ellipseMode(CENTER);
        ellipse(this.walker.position.x,this.walker.position.y,this.radius);
          
    }
}