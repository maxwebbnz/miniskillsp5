/*
// solution

let bubbles = []
let userDefine = 2; // base amount
let dist2ball;


function setup() {
  createCanvas(400, 400)
  background(0, 100, 255)


}

function draw() {
  userDefine = document.getElementById('ballsAdd').value
  console.log(dist2ball)
  ellipse(40, 40, 20, 20)
    bubbles[0] = {
      x: random(0, height),
      y: random(0, width),
      display: function () {
        ellipse(this.x, this.y, 20, 20)
      },
      move: function () {
        this.x = this.x + random(-1, 1)
        this.y = this.y - random(-1, 1)
      }
    }
   dist2ball = dist(bubbles[0].x, bubbles[0].y, mouseX, mouseY)


    bubbles[0].display();
    bubbles[0].move();

}
*/