'use strict';

let state='title';
let cnv;
let points = 0; 
let w = 600;
let h = 600;
let player
let coins =[];
let playerImg;
let coinsImg;
let oceanImg;
let spaceImg;
let witchImg;
let winnerImg;
let loserImg;
let homescreenImg;


function preload(){
  playerImg = loadImage('assets/images/mermaid.PNG');
  coinsImg = loadImage('assets/images/pearl.PNG');
  oceanImg =loadImage('assets/images/ocean.PNG');
  spaceImg =loadImage('assets/images/space.PNG');
  witchImg =loadImage('assets/images/witch.PNG');
  winnerImg =loadImage('assets/images/win.PNG');
  loserImg =loadImage('assets/images/lose.PNG');
  homescreenImg =loadImage('assets/images/homescreen.PNG');

}
function setup(){
  cnv = createCanvas(w,h);
  frameRate(12);
  imageMode(CENTER);
  rectMode(CENTER);
  textFont('monospace');

  player = new Player(); 
  //coins [0] = new Coins();
  coins.push(new Coins());

}

function draw(){
  switch (state){
    case 'title':
    title();
    cnv.mouseClicked(titleMouseClicked);
    break;
    case 'instructions':
    cnv.mouseClicked(instructionsMouseClicked);
    break;
    case 'level 1':
    level1();
    cnv.mouseClicked(level1MouseClicked);
    break;
    case 'YOU WIN!':
    youWin();
    cnv.mouseClicked(youWinMouseClicked)
    break;
    default:
    case 'YOU LOSE!':
    youLose();
    cnv.mouseClicked(youLoseMouseClicked)
    break;
    default:
    break;
  }

  //if (state === 'title'){
 //   title();
 //   cnv.mouseClicked(titleMouseClicked);
 // } else if (state === 'level 1'){
 //   level1();
  //  cnv.mouseClicked(level1MouseClicked);
  //}
}

function keyPressed(){
  if (keyCode == LEFT_ARROW){
    player.direction ='left'
  } else if(keyCode == RIGHT_ARROW){
    player.direction ='right'
  }else if(keyCode == UP_ARROW){
    player.direction ='up'
  }else if(keyCode == DOWN_ARROW){
    player.direction ='down'
  }else if (key == ' '){
    player.direction = 'still'
  }
}
function keyReleased(){
 
 let numberKeysPressed = 0;
if (keyIsDown(LEFT_ARROW)){
  numberKeysPressed++;
}
if (keyIsDown(RIGHT_ARROW)){
  numberKeysPressed++;
}
if (keyIsDown(UP_ARROW)){
  numberKeysPressed++;
}
if (keyIsDown(DOWN_ARROW)){
  numberKeysPressed++;
}


  console.log(numberKeysPressed);

  if(numberKeysPressed == 0){
  player.direction = 'still'
    }
  }
    


function title(){
  background(homescreenImg);
  textSize(70);
  fill(255);
  textAlign(CENTER);
  text('Scarletts fate',w/2, h/5);
  textSize(40);
  text('click anywhere to see instructions',w/2, h/2);
  
}

function titleMouseClicked(){

    console.log('canvas is clicked on title page');
    state = 'instructions'
  
}

function instructions(){
  background(spaceImg);
  textSize(70);
  fill(255);
  textAlign(CENTER);
  text('Collect Pearls',w/2, h/5);
  textSize(40);
  text('Light Magic Pearls leads to one fate',w/2, h-50);
  text('Dark Magic Pearls leads to another fate',w/2, h-80);
  text('click anywhere to start',w/2, h-100);
  image(witchImg, w / 2, h - 100, 100, 100)
}

function instructionsMouseClicked(){

    console.log('canvas is clicked on instructions page');
    state = 'level1'
  
}

function level1(){
  background(oceanImg);
  if (random(1) <= 0.01){
    coins.push(new Coins());

  }
  
  player.display();
  player.move();

 
//iterating through coins array to display an move them

///using for loop
   for (let i = 0; i < coins.length; i++){
   coins[i].display();
   coins[i].move();
  }

  //using forEach loop
  //coins.forEach(function(coins){
  //  coins.display();
  //  coins.move();
  //})

// using for of loop
  //for (let coin of coins){
  //  coins.display();
  //  coins.move();
  //}

  //check for collision 
  for (let i = coins.length - 1; i >= 0; i--){
  if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r +coins[i].r)/2){
   points++;
   console.log(points);
   coins.splice(i, 1);
  }else if (coins[i].y > h){
    coins.splice(i, 1);
    console.log('pearl is out of here')
  }
}
text(`points: ${points}`, w/4, h - 30);
 if (points >= 10){
    state = 'YOU WIN!'
  }
}
function level1MouseClicked(){
  //points++;
  //console.log('points = ' + points);

  //if (points >= 10){
  //  state = 'YOU WIN!'
  //}
}

function youWin(){
  background(winImg);
  textSize(80);
  stroke(255);
  text('YOU WIN!',w/2, h/2);
  textSize(40);
  text('click anywhere to restart',w/2, h*3/4);
}

function youWinMouseClicked(){
state = 'level 1';
points = 0;
witch.display();
witchr.move();
}

function youLose(){
  background(loserImg);
  textSize(80);
  stroke(255);
  text('YOU WIN!',w/2, h/2);
  textSize(40);
  text('click anywhere to restart',w/2, h*3/4);
}

function youLoseMouseClicked(){
state = 'level 1';
points = 0;
witch.display();
witchr.move();
}