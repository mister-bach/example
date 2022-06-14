let x = 400;
let y = 300;
let dir = 0;
let snake = [[x, y]];
let tick = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  for (let i = 0; i < snake.length; i++) {
    ellipse(snake[i][0], snake[i][1], 10);
  }
  if (snake.length > 10) {
    snake.shift();
  }
  ellipse(x, y, 10);
  if (dir == 0) {
    y = y - 1;
  } else if (dir == 1) {
    x = x + 1;
  } else if (dir == 2) {
    y = y + 1;
  } else if (dir == 3) {
    x = x - 1;
  }
  tick += 1;
  if (tick % 5 == 0) {
    snake.push([x, y]);
  }
}

function keyPressed() {
  if (keyCode == 87) {
    dir = 0;
  } else if (keyCode == 68) {
    dir = 1;
  } else if (keyCode == 83) {
    dir = 2;
  } else if (keyCode == 65) {
    dir = 3;
  }
}
