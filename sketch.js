var trex
var runA
var ground
var groundimg
var ground2

function preload(){
  runA = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundimg = loadImage("ground2.png")
}










function setup(){
  
   createCanvas(600, 200)
   trex = createSprite(60, 100, 20, 50)
   
   trex.addAnimation("dino", runA)
   trex.scale = 0.5
  
   ground = createSprite(300, 180, 600, 10)
   ground.addImage(groundimg)
   ground.velocityX = -2

   ground2 = createSprite(300, 188, 600, 2)
   ground2.visible = false
}




function draw(){
  background("lightgrey")
 
  if(keyDown("space") && trex.y >= 163.5){
    trex.velocityY =  -9 
  }
  
  trex.velocityY = trex.velocityY + 0.5
  
  trex.collide(ground2)
 
  if(ground.x < 0){
    ground.x = 300
  }
  //console.log(ground.x)
  
  
  
  drawSprites()
}