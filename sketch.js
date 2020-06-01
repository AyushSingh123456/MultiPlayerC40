var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var allPlayers

var form, player, game;
var car1, car2, car3, car4

var Cars = []


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  console.log()
}


function draw(){
  background("white")
  if (playerCount == 4){
    game.update(1)
  }
  if (gameState == 1){
    game.play()
  }
}
