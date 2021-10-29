function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  snowImg = loadImage("snow1.jpg")
}

function draw() {
  background(snowImg);  
  drawSprites();
}