//Algorithms 
//algo for istouching
var frect,mrect;
function setup() {
  createCanvas(800,400);
  frect=createSprite(400, 200, 50, 50);  //width=50/2=25
  frect.shapeColor="green"
  mrect=createSprite(400, 200, 80, 50);  //width=80/2=40,40+25=65
  mrect.shapeColor="green"

}

function draw() {
  background(255,255,255);  
  mrect.x=mouseX
  mrect.y=mouseY
  console.log(mrect.x-frect.x)   //disctance
  //algo for istouching
  if(mrect.x-frect.x < mrect.width/2+frect.width/2 && frect.x-mrect.x < mrect.width/2+frect.width/2 && mrect.y-frect.y<mrect.height/2+frect.height/2 && frect.y-mrect.y<mrect.height/2+frect.height/2)
  {
    mrect.shapeColor="red"
    frect.shapeColor="red"
  }
  else{
    mrect.shapeColor="green"
    frect.shapeColor="green"
  }
  drawSprites();
}