var fixed,moving
function setup() 
{
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  fixed.shapeColor="red";
  moving=createSprite(200, 200, 40, 35);
  moving.shapeColor="red";
  fixed.debug=true;
  moving.debug=true;
}

function draw() 
{
  background(0,0,0);
  moving.x=World.mouseX;
  moving.y=World.mouseY;

console.log(fixed.x-moving.x);

  if(fixed.x-moving.x < (fixed.width+moving.width)/2 && moving.x-fixed.x < (moving.width+fixed.width)/2 && moving.y-fixed.y < (fixed.height+moving.height)/2 && fixed.y-moving.y < (fixed.height+moving.height)/2)
  {
    moving.shapeColor="green";
    fixed.shapeColor="green";
  }
  else
  {
    moving.shapeColor="red";
    fixed.shapeColor="red";
  }
  drawSprites();
}