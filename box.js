class Box {
    constructor(x, y, width, height) {

      this.image = loadImage("dustbingreen.png");
      this.body = Bodies.rectangle(x, y, width, height, {isStatic:true});
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(this.x,this.y,this.width, this.height);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };
  