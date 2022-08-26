var database;
var local_playerCount, local_gameState;
var gameobj, formobj, playerobj;
var player1, player2, players=[];
var allPlayers;
var obs, obsGroup

function preload(){
  
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  gameobj = new Game();
  gameobj.getState();
  gameobj.start();
  
}

function draw() {
  background(0);
  
   if (local_playerCount === 2) {
     gameobj.update(1);
   }
   if (local_gameState === 1) {
     clear(); 
     gameobj.play();
   }
   if (local_gameState === 2) {
    
   //  gameobj.end();
   }
}