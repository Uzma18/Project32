class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
     // this.image = loadImage("sprites/wood1.png");
     this.visibility=255;
    }
    
    score(){
      if(this.visibility<0 && this.visibility > -105){
        score++;
      }
    }

    display(){
      if(this.body.speed<4){
        super.display();
      }
      else{
        World.remove(world,this.body);
        push();
        tint(255,this.visibility);
        this.visibility=this.visibility-5;
        //image(this.image,this.body.position.x,this.body.position.y,30,40)
        pop();
      }
    }
  
  };
  