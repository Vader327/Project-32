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
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      rectMode(CENTER);
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill(this.color);
      rect(0, 0, this.width, this.height);
      pop();
    }
}