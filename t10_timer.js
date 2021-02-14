/*

// solution

var timer;
var timer2;
var counter = 0;
var counter2 = 30;
var interval;
var intervalDown;
function setup(){
  createCanvas(400,400)
  timer = createP('timer')
  timer2 = createP('GOING DOWN FROM 30!!!!')
      interval = setInterval(timeIt,500);
}

function timeIt(){
  timer.html(counter)
  counter++;
  console.log(counter)
  if(counter == 31){
    clearInterval(interval)
    console.log("timer ended starting seconded timer")
    background(255,255,0)
      intervalDown = setInterval(timeItDown,500);

  }
}
function timeItDown(){
  timer2.html(counter2)
  timer.html("Timer Finished!")
  counter2--;
  console.log(counter2)
  if(counter2 == -1){
    clearInterval(intervalDown)
    console.log("timer ended starting seconded timer")
    background(255)

  }
}

function draw(){
  background(51)
}

*/