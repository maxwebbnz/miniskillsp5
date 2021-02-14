/*

// solution

let bubbles = []
let userDefine = 2; // base amount

function setup() {
  createCanvas(400, 400)
  background(0, 100, 255)


}

function draw() {
  userDefine = document.getElementById('ballsAdd').value
  ellipse(40, 40, 20, 20)
    for (var i = 0; i < 2; i++) {
    bubbles[i] = {
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
    print(bubbles)
  }
  for (var i = 0; i < bubbles.length; i++) {
    if(i > 20){
      print("too many!!!!")
    }else{
    bubbles[i].display();
    bubbles[i].move();
    }

  }

}

*/