class Hammer{
    constructor(x,y,width,height){ 
     var option={
        isStatic:true,   
    "density":2,
    "friction":1.0,
    "restitution":0.5
    
     }
    this.body=Bodies.rectangle(x,y,200,50,option)
;       
    this.width=100;
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
   
    fill("green");
    rect(0,0,this.width,this.height) ;
  
    this.body.position.x=mouseX;
    this.body.position.y=mouseY;  
    pop();
   }
   
   }
   