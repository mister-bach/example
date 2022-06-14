let width = 800;
let height = 600;
let bots;

class DNA {
  constructor() {
    // speed food
    // 00    0000
    this.length = 12;
    this.dna = "";
    for (let i = 0; i < this.length; i++) {
      this.dna += str(int(random(0, 2)));
    }
  }
}

function generateChildren(poolSize) {
  let pool = [];
  for (let i = 0; i < poolSize; i++) {
    pool.push(new DNA());
  }
  return pool;
}

function generateBots(pool) {
  let bots = [];
  for (let i = 0; i < pool.length; i++) {
    let speed = parseInt(pool[i].dna.slice(0, 2), 2);
    let metabolism = parseInt(pool[i].dna.slice(2, 6), 2) + 1;
    let angleChange = parseInt(pool[i].dna.slice(6, 12), 2);
    bots.push(new Bot(width / 2, height / 2, speed, metabolism, angleChange));
  }
  return bots;
}

class Bot {
  // This is a comment
  constructor(x, y, speed, metabolism, angleChange) {
    this.x = x;
    this.y = y;
    this.life = 50;
    this.metabolism = metabolism;
    this.angleChange = angleChange;
    this.speed = speed / 4;
    this.angle = random(0, 360);
  }

  draw() {
    // ellipse(this.x, this.y, 20);
    push();
    translate(this.x, this.y);
    print(this.x, this.y);
    rotate(radians(this.angle));
    fill(0, 0, 0);
    ellipse(0, 0, 20);
    fill(150, 150, 250);
    ellipse(5, 0, 10);
    pop();
  }

  update() {
    this.x += this.speed * cos(radians(this.angle));
    this.y += this.speed * sin(radians(this.angle));
    this.life -= this.metabolism / 60;
    this.angle += this.angleChange / 60;
  }
}

function setup() {
  createCanvas(width, height);
  let pool = generateChildren(100);
  bots = generateBots(pool);
}

function draw() {
  background(220);
  for (let i = 0; i < bots.length; i++) {
    bots[i].update();
    if (bots[i].life > 0) {
      bots[i].draw();
    }
  }
}
