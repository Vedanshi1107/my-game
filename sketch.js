var player,player_running;
var bgimg;
var ground,groundimg;
var score = 0;
var obstacle1,obstacle2,obstaclesGroup;
var bg


function preload(){
  player_running = loadAnimation("runner1.png","runner2.png");
  bgimg = loadImage("0.png");


  obstacle1 = loadImage("OBSTACLE1 .jpg");
  obstacle2 = loadImage("OBSTACLE2 .jpg");


}

function setup(){
  createCanvas(displayWidth,displayHeight);
  player = createSprite(width-750,displayHeight-50,20,50);
  player.addAnimation("running", player_running);
  player.scale= 0.08;

  bg = createSprite(displayWidth/2,displayHeight/2,1500,1500);
  bg.addImage(bgimg);
  bg.velocityY = 4;
  bg.scale = 2.0;
  console.log(displayWidth+","+displayHeight)

   
  obstaclesGroup = new Group();
}
function draw(){
  background(180)
  drawSprites();

  if (bg.y > 400){
    bg.y = bg.height/4;
  }

  spawnObstacles();
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,height-95,20,30);
    obstacle.setCollider('circle',0,0,45)
    // obstacle.debug = true
  
    obstacle.velocityY = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.3;
    obstacle.lifetime = 300;
    obstacle.depth = player.depth;
    player.depth +=1;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}