class Block {
  constructor(x,y,width,height) {
    var options = {
        restitution: 0.3,
        friction: 0.5,
        isStatic: false
    }
    this.visibility = 255;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    console.log(this.visibility);
  }
  score(){
    if(this.visibility < 0 && this.visibility > -105){
     points ++;
    }
  }
  display(){
    fill(random(255),random(255),random(255));
    if(this.body.speed < 3){
       var angle = this.body.angle;
       var pos = this.body.position;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       rectMode(CENTER);
       rect(0,0, this.width, this.height);
       pop();
    }
    else{
      push();
      this.visibility = this.visibility - 5;
      tint(255,this.visiblity);
      pop();  
      World.remove(world, this.body); 
    }
  }
}