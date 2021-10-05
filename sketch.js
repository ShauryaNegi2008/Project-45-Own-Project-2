var bg, bgImg, spaceShip, spaceShipImg, ufo1, ufo2, ufo3, ufo4, ufo5, ufoImg, bullet, bullet1, bulletGroup, bulletGroup1;

function preload() {
  bg = loadImage("assets/bg.jpg");
  spaceShipImg = loadImage("assets/spaceShip.jpg");
  ufoImg = loadImage("assets/ufo.jpg")
}

function setup() {
  canvas = createCanvas(800, 400);
  spaceShip = createSprite(400, 350);
  spaceShip.addImage(spaceShipImg);
  spaceShip.scale = 0.5;
  ufo1 = createSprite(0, 10)
  ufo1.scale = 0.10
  ufo1.velocityX = 2
  ufo1.addImage(ufoImg);
  ufo2 = createSprite(200, 10)
  ufo2.scale = 0.10
  ufo2.velocityX = -2
  ufo2.addImage(ufoImg);
  ufo3 = createSprite(400, 10)
  ufo3.scale = 0.10
  ufo3.velocityX = 2
  ufo3.addImage(ufoImg);
  ufo4 = createSprite(600, 10)
  ufo4.scale = 0.10
  ufo4.velocityX = -2
  ufo4.addImage(ufoImg);
  ufo5 = createSprite(800, 10)
  ufo5.scale = 0.10
  ufo5.velocityX = 2
  ufo5.addImage(ufoImg);

  ufoGroup = new Group();
}

function draw() {
  background(bg)
  drawSprites();
  Move();
  UfoX();
}
function Move() {
  if (keyDown("RIGHT_ARROW")) {
    spaceShip.x = spaceShip.x + 5
  }
  if (keyDown("LEFT_ARROW")) {
    spaceShip.x = spaceShip.x - 5
  }
}

function UfoX() {
  if (ufo1.x >= 800) {
    ufo1.velocityX = -2
  }
  if (ufo1.x <= 0) {
    ufo1.velocityX = 2
  }

  if (ufo2.x >= 800) {
    ufo2.velocityX = -2
  }
  if (ufo2.x <= 0) {
    ufo2.velocityX = 2
  }

  if (ufo3.x >= 800) {
    ufo3.velocityX = -2
  }
  if (ufo3.x <= 0) {
    ufo3.velocityX = 2
  }

  if (ufo4.x >= 800) {
    ufo4.velocityX = -2
  }
  if (ufo4.x <= 0) {
    ufo4.velocityX = 2
  }

  if (ufo5.x >= 800) {
    ufo5.velocityX = -2
  }
  if (ufo5.x <= 0) {
    ufo5.velocityX = 2
  }
}