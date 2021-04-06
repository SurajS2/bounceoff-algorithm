var a,b




function setup() {
  createCanvas(1200,800);
  
  a=createSprite(400, 100, 50, 80);
  b=createSprite(400,800,30,30)

  a.shapeColor="pink"
  b.shapeColor="pink"

  a.velocityY=5
  b.velocityY=-5
}

function draw() {
  background("skyblue");  
  if(a.y-b.y<a.height/2+b.height/2 && b.y-a.y<b.height/2+a.height/2){
    a.velocityY=a.velocityY*(-1)
    b.velocityY=b.velocityY*(-1)
  }

 
  drawSprites();
}
