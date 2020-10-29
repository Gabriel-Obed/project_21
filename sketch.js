var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  
  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);

  wall = createSprite(1200, 200, thickness, 200);
  
  bullet = createSprite(200, 200, 40, 10);
  bullet.velocityX = speed;
  
}

function draw() {
  background("black");
  
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    if (damage > 10) {
      wall.shapeColor = "red";
    }
    if (damage < 10) {
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}

function hasCollided(lbullet, lwall){

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}