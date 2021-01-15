 var tom , tomSleep , tomRunning , tomSitting;
 var jerry , jerryEating, jerryTeasing , jerryStaring; 
 var scene , sceneImg;
 var invisibeleGround;

    function preload() {
    
    tomSleep = loadImage("tomOne.png");
    tomRunning = loadImage("tomTwo.png");
    tomSitting = loadImage("tomFour.png");
    
    jerryEating = loadImage("jerryOne.png");
    jerryTeasing = loadImage("jerryTwo.png");
   
    sceneImg = loadImage("garden.png");

    
}

  function setup(){ 

 createCanvas(800,800);

 scene = createSprite(200,200,800,800);
 scene.addImage(sceneImg);

 tom = createSprite(550,400,20,20);
 tom.addImage(tomSleep);
 tom.scale=0.1;

 jerry = createSprite(100,400,20,20);
 jerry.addImage(jerryEating);
 jerry.scale=0.1;

 invisiGround = createSprite(300,450,790,7);
 invisiGround.visible = false;
 
}

 function draw() {

 tom.depth = jerry.depth;
 tom.depth = tom.depth + 1;



 if(keyDown(LEFT_ARROW)){

 tom.x = tom.x - 3;

 tom.addAnimation("catRunning" , tomRunning);
 tom.changeAnimation("catRunning");
}
 
  if(keyDown(LEFT_ARROW)){
 
  jerry.addAnimation("mouseTeasing" , jerryTeasing);
  jerry.changeAnimation("mouseTeasing");
}

if(tom.isTouching(jerry)){
  
 tom.addAnimation("catSitting" , tomSitting);
 tom.changeAnimation("catSitting");
 tom.velocityX = 0;

}
  drawSprites();

}