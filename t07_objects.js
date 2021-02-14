/*
// solution:

// base declaration for constants
let x;
let y;


// second ball here:
let ball1 = {
  radius: 20,
  speed: 10,
  xpos: 0, // wanting the ball to be centre -- this also cannot be set outside the setup function due to initialising p5 outside of this class
  ypos: 0, // wanting the ball to be centre -- applies above here.
  circleDirectionX: 1, // Left or Right
  circleDirectionY: 1,
}
let ball2 = {
  radius: 20,
  speed: 10,
  xpos: 0, // wanting the ball to be centre -- this also cannot be set outside the setup function due to initialising p5 outside of this class
  ypos: 0, // wanting the ball to be centre -- applies above here.
  circleDirectionX: 1, // Left or Right
  circleDirectionY: 1,
}


// init p5.js lib
function setup() {
  createCanvas(400, 400);
  // i could call ball1.xpos and ball1.ypos but this works fine and effectively, saves typing out more than i need too. 

  ball1.xpos = width/2
  ball1.ypos = height/2
  ball2.xpos = width/4
  ball2.ypos = height/4
    x = ball1.xpos;
  y = ball1.ypos;

  x2 = ball2.xpos
  y2 = ball2.ypos
  createBall();

}




function draw() {
  background(0, 100, 255)
  frameRate(200)
  //text("Press Mouse to Move ball to you!", width / 2, height - 20)
  createBall()
  ellipseMode(RADIUS)
}

function createBall() {
  ellipse(x, y, ball1.radius, ball1.radius)
  fill(255,255,0)
  ellipse(x2, y2, ball2.radius, ball2.radius)
  fill(random(0,255),random(0,255),random(0,255))
}

*/