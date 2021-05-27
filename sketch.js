var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3 =createSprite(510,580,200,30);
    block3.shapeColor = "green";

    block3 =createSprite(710,580,180,30);
    block3.shapeColor = "red";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX=5;
    ball.velocityY=-5;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }

    //write code to bounce off ball from the block3
    function bounceOff(ball,block3){
if (ball.x - block3.x < block3.width/2 + ball.width/2
      && block3.x - movingRect.x < block3.width/2 + ball.width/2) {
         ball.velocityX = ball.velocityX * (-1);
    block3.velocityX = block3.velocityX * (-1);
   // return true;
  }
  if (movingRect.y - block3.y < block3.height/2 + movingRect.height/2
    && block3.y - movingRect.y < block3.height/2 + movingRect.height/2){
        movingRect.velocityY = movingRect.velocityY * (-1);
    block3.velocityY = block3.velocityY * (-1);
 // return false;
  }
}


    //write code to bounce off ball from the block4
    function bounceOff(ball,block4){
if (ball.x - block4.x < block4.width/2 + ball.width/2
      && block4.x - ball.x < block4.width/2 + ball.width/2) {
         ball.velocityX = ball.velocityX * (-1);
    block4.velocityX = block4.velocityX * (-1);
   // return true;
  }
  if (ball.y - block4.y < block4.height/2 + ball.height/2
    && block4.y - ball.y < block4.height/2 + ball.height/2){
        ball.velocityY = ball.velocityY * (-1);
    block4.velocityY = block4.velocityY * (-1);
 // return false;
  }
}

    drawSprites();
}
