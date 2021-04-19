var sceneImg;
var cat,cat1,cat2,cat3;
var mouse,mouse1,mouse2,mouse3;

function preload() {
    //load the images here
    sceneImg=loadImage("images/garden.png");
    cat1=loadAnimation("images/cat1.png");
    cat2=loadAnimation("images/cat2.png","images/cat3.png");
    cat3=loadAnimation("images/cat4.png");
    mouse1=loadAnimation("images/mouse4.png");
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3=loadAnimation("images/mouse1.png");
}

function setup(){
    createCanvas(600,600);
    //create tom and jerry sprites here
    cat=createSprite(450,450,50,50);
    cat.addAnimation("catSitting",cat1);
    cat.scale=0.1;
    
    mouse=createSprite(50,450,30,30);
    mouse.addAnimation("mouseSitting",mouse1);   
    mouse.scale=0.1;  
}

function draw() {

    background(sceneImg);
    keyPressed();
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
      cat.velocityX=0;
      cat.addAnimation("catHappy",cat3);
      cat.changeAnimation("catHappy");
      mouse.addAnimation("mouseHappy",mouse3);
      mouse.changeAnimation("mouseHappy");

    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing", mouse2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=20;
}
if(keyCode===LEFT_ARROW){
    cat.addAnimation("catRunning", cat2);
    cat.changeAnimation("catRunning");
    cat.velocityX=-5;
}

}
