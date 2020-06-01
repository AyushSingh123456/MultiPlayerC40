class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200)
    car2 =  createSprite(300, 200)
    car3 = createSprite(500,200)
    car4 =  createSprite(700,200)
    Cars = [car1,car2,car3,car4]
  }

  play(){
textSize(30);
    form.hide();
text("Game Starts", 120, 100);
Player.getPlayerInfo();

if (allPlayers != undefined){
  var Index = 0
  var xPos = 0
  var yPos = 0
  
  for (var plr in allPlayers){
    Index = Index+1
    xPos = xPos + 200
    yPos = displayHeight - allPlayers[plr].distance
    Cars[Index-1].x = xPos
    Cars[Index-1].y = yPos
    if (Index == player.index){
      Cars[Index-1].shapeColor = "green"
      camera.position.x = displayWidth/2
      camera.position.y = Cars[Index-1].y
      
    }
    else {
      Cars[Index-1].shapeColor = "red";
      
    }
//displayPosition = displayPosition+30
//text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, displayPosition)
  }
  if (keyDown(UP_ARROW) && player.index != null){
    player.distance = player.distance + 30
    player.update()
  }
  if (keyDown(DOWN_ARROW) && player.index != null){
    player.distance = player.distance - 30
    player.update()
  }
}
drawSprites()
  }
}
