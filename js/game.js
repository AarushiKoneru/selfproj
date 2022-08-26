class Game{
    constructor(){

    }
    getState() {
        database.ref('gameState').on("value", function (data) {
            local_gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
           gameState: state
        })
    }

    start(){
        playerobj= new Player();
        playerobj.getCount();
        formobj = new Form();
        formobj.display();

        player1= createSprite(200,200);
        player2= createSprite(400,200);
        players=[player1,player2];
    }

    play(){
        formobj.hide();
        Player.getPlayerInfo();
        
        //image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();
        for(var plr in allPlayers)
        { 
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;

            players[index -1].x = x;
            players[index - 1].y = y;
            
            fill("black");
            textSize(25);
            text(allPlayers[plr].name ,x-25,y+25);
            
            textSize(25);
            fill("white");
            text("Player 1 :" +allPlayers.player1.score,50,50);
            text("Player 2 :" + allPlayers.player2.score, 50, 100);
        }

        if (keyIsDown(RIGHT_ARROW) && playerobj.index !== null) {
            playerobj.distance -= 10
            playerobj.update();
        }
        if (keyIsDown(LEFT_ARROW) && playerobj.index !== null) {
            playerobj.distance += 10
            playerobj.update();
        }

    
        if (frameCount % 20 === 0) {
            obs = createSprite(100, random(50,300),50, 50);
            obs.velocityX = 6;
            obs.shapeColor="red";
            var rand = Math.round(random(1,5));
            
            
        }

    }
}
