// Introduction to Conditional Statements
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/3.1-conditional-statements.html
// https://youtu.be/1Osb_iGDdjk
// https://thecodingtrain.com/beginners/p5js/3.2-bouncing-ball.html
// https://youtu.be/LO3Awjn_gyU

//notes:
//if(bolean expression){} true means it work false it does not
//conditional statements are powerful to have things only happen with certain condtions
//conditions can be used to contain a ball on screen
//x = x-3 and x=x+3 is flawed because it only moves back once
//you need to make it stop looping with varaible speed
//have draw loops do something different based on true and false


var x = 0;
var speed = 3;

function setup() {
  createCanvas(600, 400);
}
//function draw() {
//  background(0);
//
//  stroke(255);
//  strokeWeight(4);
//  noFill();
//
//  if (mouseX > 300) {
//    fill(255, 0, 200);
//  }
//
//  ellipse(300, 200, 100, 100);
//}

//function draw() {
//  background(0);
//  stroke(255);
//  strokeWeight(4);
//  noFill();
//  ellipse(x, 200, 100, 100);
//  if (x > width) {
//  	println("OFF THE SCREEN!")
//    speed = -3;
//  }

//  x = x + speed;
//}

//function draw() {
//  background(0);

//  stroke(255);
//  strokeWeight(4);
//  noFill();

  // if (mouseX > 250) {
  //   ellipse(300, 200, 100, 100);
  // } else if (mouseX > 150) {
  //   rect(300, 200, 100, 100);
  // } else if (mouseX > 50) {
  //   line(0, 0, width, height);
  // } else {
  //   point(300, 200);
  // }

//  if (mouseX > 300 && mouseX < 400) {
//    fill(255, 0, 200);
//  }
//  rect(300, 200, 100, 100);
//}

function draw() {
  background(0);

  stroke(255);
  strokeWeight(4);
  noFill();

  // if (mouseX > 250) {
  //   ellipse(300, 200, 100, 100);
  // } else if (mouseX > 150) {
  //   rect(300, 200, 100, 100);
  // } else if (mouseX > 50) {
  //   line(0, 0, width, height);
  // } else {
  //   point(300, 200);
  // }

  if (mouseX > 300 && mouseX < 400) {
    fill(255, 0, 200);
  }
  rect(300, 200, 100, 100);
}