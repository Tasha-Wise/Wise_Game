'use strict';

let state='title';
let cnv;
let points = 0; 
let w = 600;
let h = 600;

//movable assets
let player;
let coins =[];
let enemies =[];

//images
let playerImg;
let coinsImg;
let oceanImg;
let spaceImg;
let witchImg;
let winnerImg;
let loseImg;
let homescreenImg;
let enemyImg;

//spritesheets and animation
let playerSS;
let playerJSON;
let playerAnimation = [];

function preload(){
   //stillimages
  playerImg = loadImage('assets/images/mermaid.PNG');
  coinsImg = loadImage('assets/images/pearl.PNG');
  enemyImg = loadImage('assets/images/enemy.PNG');
  oceanImg =loadImage('assets/images/ocean.PNG');
  spaceImg =loadImage('assets/images/space.PNG');
  witchImg =loadImage('assets/images/witch.PNG');
  winnerImg =loadImage('assets/images/win.PNG');
  loseImg =loadImage('assets/images/lose.PNG');
  homescreenImg =loadImage('assets/images/homescreen.PNG');

  //spritesheets
  playerSS = loadImage('assets/sprites/spritesheet.png');
  playerJSON = loadJSON('assets/sprites/spritesheet.json');

}
function setup(){
  cnv = createCanvas(w,h);
  frameRate(12);
  textFont('monospace');

  player = new Player(); 
  
  //coins [0] = new Coins();
  coins.push(new Coins());
  enemies.push(new Enemies());  


//console.log(playerJSON.frames[0].frame);

let playerFrames = playerJSON.frames;

for (let i = 0; i< playerFrames.length; i++){
  //console.log(playerFrames[i]);
  let pos = playerFrames[i].frames;
  let img = playerSS.get(pos.x, pos.y, pos.w, pos.h);
  playerAnimation.push(img);
  //console.log(playerAnimation);
  }

}

function draw(){
  switch (state){
    case 'title':
    title();
    cnv.mouseClicked(titleMouseClicked);
    break;
    case 'level 1':
    level1();
    cnv.mouseClicked(level1MouseClicked);
    break;
    case 'level 2':
    level2();
    cnv.mouseClicked(level2MouseClicked);
    break;
    case 'you win':
    youWin();
    cnv.mouseClicked(youWinMouseClicked);
    break;
    case 'game over':
    gameOver();
    cnv.mouseClicked(gameOverMouseClicked);
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
    player.direction ='left';
  } else if(keyCode == RIGHT_ARROW){
    player.direction ='right';
  }else if(keyCode == UP_ARROW){
    player.direction ='up';
  }else if(keyCode == DOWN_ARROW){
    player.direction ='down';
  //}else if (key == ' '){
  //  player.direction = 'still'
  }
}
function keyReleased(){
  if(player == '') {
        player.direction = 'still';
    } 
}

function title(){
  background(homescreenImg);
  textSize(70);
  fill(255);
  stroke(0);
  strokeWeight(4);
  textAlign(CENTER);
  text('Scarletts Fate',w/2, h/6);
  textSize(30);
  text('click anywhere to see instructions',w/2, h/4);
  //image(witchImg, w / 2, h - 100, 100, 100)
}

function titleMouseClicked(){
    state = 'level 1';
    console.log('canvas is clicked on title page');
    
  
}

function level1(){
  background(spaceImg,);
  textSize(70);
  fill(255);
  stroke(0);
  strokeWeight(4);
  textAlign(CENTER);
  text('Collect Pearls',w/2, h/5);
  textSize(25);
  text('Light Magic Pearls leads to one fate',w/2, h/3);
  text('Dark Magic Pearls leads to another fate',w/2, h/2);
  text('click anywhere to start',w/2, h-200);
  text('use arrow keys to move',w/2, h-100);
  image(witchImg, w / 2, h - 100, 100, 100);

}

function level1MouseClicked(){
    state = 'level 2';
    console.log('canvas is clicked on instructions page');
    

}

function level2(){
  background(oceanImg);
  if (random(1) <= 0.04){
    coins.push(new Coins());
  }
  if (random(1) <= 0.04){
    enemies.push(new Enemies());
  }
  player.display();
  player.move();

 
//iterating through coins array to display an move them

///using for loop
   for (let i = 0; i < coins.length; i++){
   coins[i].display();
   coins[i].move();
  }


    for (let i = 0; i < enemies.length; i++){
   enemies[i].display();
   enemies[i].move();
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
  if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r +coins[i].r)/4){
   points++;
   console.log(points);
   coins.splice(i, 1);
  }else if (coins[i].y > h){
    coins.splice(i, 1);
    console.log('Light pearl is out of here');
  }
}

for (let i = enemies.length - 1; i >= 0; i--){
  if (dist(player.x, player.y, enemies[i].x, enemies[i].y) <= (player.r +enemies[i].r)/4) {
   console.log(points);
   enemies.splice(i, 1);
  }else if (enemies[i].y > h){
    enemies.splice(i, 1);
    console.log('Dark pearl is out of here');
  }
}
 
text(`points: ${points}`, w/4, h - 30);
if (points >= 5){
    state = 'you win';
  } else if (points <= -5){
    state ='game over';
  }
}
function level2MouseClicked(){
 points++;
  console.log('points = ' + points);

 // text(`points: ${points}`, w/4, h - 30);
 //if (points >= 2){
 //   state = 'you win'
  //} else if (points <= -1){
  //  state ='you lose';
  //}
}

function youWin(){
  background(winnerImg);
  textSize(80);
  stroke(0);
  strokeWeight(4);
  text('YOU WIN!',w/2, h/2);
  textSize(40);
  text('click anywhere to restart',w/2, h-20);
}

function youWinMouseClicked(){
state = 'title';
points = 0;
}

function gameOver(){
  background(loseImg);
  textSize(80);
  stroke(0);
  strokeWeight(4);
  text('GAME OVER!',w/2, h/2);
  textSize(40);
  text('click anywhere to restart',w/2, h*3/4);
}

function gameOverMouseClicked(){
state = 'title';
points = 0;
}