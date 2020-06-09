class Block{
  constructor(x, y, width, height, color) {
      var options = {
          isStatic: false,
          'restitution':0.8,
          'friction':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = color;
      this.visibility = 255;

      this.blue = loadImage("blue.png");
      this.orange = loadImage("orange.png");
      this.yellow = loadImage("yellow.png");
      this.red = loadImage("red.png");
      this.green = loadImage("green.png");
      
      World.add(world, this.body);
    }
  display(){
    if(this.body.speed < 3){
      var angle = this.body.angle;
      rectMode(CENTER);
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill(this.color);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      this.visibility-=5;
      push();
      tint(255, this.visibility);

      if(this.color == "rgb(0, 204, 255)"){
        image(this.blue, this.body.position.x, this.body.position.y, 40, 40);
      }
      if(this.color == "orange"){
        image(this.orange, this.body.position.x, this.body.position.y, 40, 40);
      }
      if(this.color == "#ffdf2c"){
        image(this.yellow, this.body.position.x, this.body.position.y, 40, 40);
      }
      if(this.color == "#f54f49"){
        image(this.red, this.body.position.x, this.body.position.y, 40, 40);
      }
      if(this.color == "#69e25e"){
        image(this.green, this.body.position.x, this.body.position.y, 40, 40);
      }
      pop();
    }
  }
}