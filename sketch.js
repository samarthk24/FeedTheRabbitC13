var garden,rabbit,apples,apple,leaf,leaves,imgPick, spritePick, score;
var gardenImg,rabbitImg,appleImg,leafImg1,leafImg2,leafImg3;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg1 = loadImage("orangeLeaf.png");
  leafImg2 = loadImage("leaf.png");
  leafImg3 = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apples = createGroup();
leaves = createGroup();

score = 0;
}


function draw() {
  background(0);

  

  rabbit.x = mouseX;

  if(apples.isTouching(rabbit)){
    apples.destroyEach();
    score ++;
  }
  
  if(leaves.isTouching(rabbit)){
    leaves.destroyEach();
    score ++;
  }
  

  if(frameCount%80===0){
    spritePick = Math.round(random(0, 2));
    if(spritePick==1){
      spawnLeaves();
    }
    else{
      spawnApples();
    }
  }
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
  fill("white");
  textSize(20);
  text("Score: " + score, 10, 20);
}

function spawnApples(){

apple = createSprite(200, -50, 30, 30);
apple.x = random(30, 370);
apple.velocityY = 8;
apple.addImage("image", appleImg);
apple.scale = 0.075;
apple.lifetime = 100;
apples.add(apple);
}

function spawnLeaves(){

leaf = createSprite(200, -150, 30, 30);
leaf.x = random(30, 370);
leaf.velocityY = 5;

imgPick = Math.round(random(1, 3));

if(imgPick==1){
  leaf.addImage("image", leafImg1);
}

if(imgPick==2){
  leaf.addImage("image", leafImg2);
}

if(imgPick==3){
  leaf.addImage("image", leafImg3);
}

leaf.scale = 0.1;
leaf.lifetime = 100;
leaves.add(leaf);
}