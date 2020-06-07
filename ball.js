class Ball{
  constructor(x, y, radius) {
    var options = {
        isStatic: false,
        'restitution':1.0,
        'friction':1.0,
        'density':1.0
      }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    this.color = color;
    this.image = loadImage("ball.png");
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius*2 + 4, this.radius*2 + 4);
    pop();
  }
}