/*
var ballx = 40
var bally = 40

let y;
let x;
// this solution will make the ball hit the wall excatly at the same place


let circleDirectionX = 1; // Left or Right
let circleDirectionY = 1; // Top to Bottom

function setup(){
createCanvas(400,400)
 x = width / 2;
  y = 40;
}
function draw(){
  background(0,100,255)
  frameRate(200)
  // text("Press Mouse to Move ball to you!", width/2, height-20)
  createBall()
  ellipseMode(RADIUS)
}

// ballhandler
  // for moving ball at random

function createBall(){
  ellipse(x, y, 20,20)
   x = x + 1 * circleDirectionX;
  y = y + 1 * circleDirectionY;

  if (x > width - 20 || x < 20) {
    circleDirectionX *= -1;
  }
  if (y > height - 20 || y < 20) {
    circleDirectionY *= -1;
  }

}

*/