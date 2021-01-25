class Rubber{
    constructor(x,y,width,height){ 
     var option={
         
    "density":2,
    "friction":1.0,
    "restitution":0.5
    
     }
    this.body=Bodies.rectangle(x,y,20,20,option)
;       
    this.width=20;
    this.height=20;
    World.add(world,this.body);
   }
   display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    angleMode(RADIANS);
    rotate(angle);
    rectMode(CENTER);
   
    fill("yellow");
    rect(0,0,this.width,this.height) ;
  
   
    pop();
   }
   
   }
   