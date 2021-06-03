var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var bg, redsnake, greensnake,reds,greens,cars,bluesnake,blacksnake,blues,blacks;

function preload(){
  bg = loadImage("images/backGround.png");
  
  reds= loadImage("images/redSnake1.png");
  greens = loadImage("images/greenSnake2.png");
  blues=loadImage("images/greenSnake3.png");
  blacks=loadImage("images/greenSnake4.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
