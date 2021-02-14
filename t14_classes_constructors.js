// solution :D took a while :(

let Balls = [];
let score = 0; // so it doesn't return nil on start
function setup() {
  createCanvas(400, 400)
  for (let i = 0; i < 4; i++) {
    let x = random(0, width)
    let y = random(0, height)
    let r = 20
    let c = 0
    let b = new Ball(x, y, r, c)
    Balls.push(b)
  }
}

function draw() {
  background(0)
  fill(255);
  text("Your Score is " + score, 10, 30)
  for (let i = 0; i < Balls.length; i++) {
    Balls[i].move()
    Balls[i].show()
  }
}

// solution was fou
function mousePressed() {
  for (let i = Balls.length - 1; i >= 0; i--) {
    if (Balls[i].clicked(mouseX, mouseY)) {
      Balls.splice(i, 1);
    }
  }
}
class Ball {
  constructor(x, y, r, col) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.colour = col;
  };
  move() {
    this.x = this.x + random(-5, 5)
    this.y = this.y + random(-5, 5)
  };
  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      score = score + 1;
      return true;
    } else {
      return false;
    }
  }

  show() {
    stroke(255)
    fill(this.colour)
    ellipse(this.x, this.y, this.r * 2)
  }
}