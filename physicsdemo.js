let width = 800;
let height = 600;
let gravity = 981;
let ball;

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vX = 2;
    this.vY = 0;
    this.mass = 1; // kilograms
    this.diameter = 10; // meters
    this.previous = millis();
  }

  update() {
    let elapsedTime = (millis() - this.previous) / 1000;
    this.vY = this.vY + gravity * elapsedTime;
    // this.vX = this.vX + gravity * elapsedTime;
    let s = 0.5 * gravity * pow(elapsedTime, 2);
    this.y = s;
    this.x += this.vX;

    if (this.y > height) {
      this.y = height - this.diameter / 2;
    }
  }

  draw() {
    ellipse(this.x, this.y, this.diameter);
  }
}

function setup() {
  createCanvas(width, height);
  ball = new Ball(50, 50);
}

function draw() {
  background(220);
  ball.update();
  ball.draw();
  // frameRate(1);
}
