var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "white";
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = "gray";
  wall = createSprite(1200, 200, 50, 1000);
  //wall.visible=0
  car.collide(wall);

}

function draw() {
  background(0); 
  
  


  if(0.5*weight*speed*speed/22500<100){
    car.shapeColor = "yellow";
  }

  if(0.5*weight*speed*speed===random(100,180)){
   car.shapeColor = "green";
  }

 if(0.5*weight*speed*speed/22500>180){
   car.shapeColor = "red";
  }
  drawSprites();
}