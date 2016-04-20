var score = 0;

var r;

var pistol;
var pistolDefault;
var gunShot;

var pistolAnimation;
var pistolDefaultAnimation;

var worldMap = [
 //36X26
 
 //send data using OSC
 
 //player start at 18,13 19,13 18,14 19,14
 
 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, 11, 0, 0, 0, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, 0, 0, 0, 0, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, 0, 0, 0, 0, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, 0, 0, 0, 0, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 1],
 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
 ];
 
 

var pos;
var dir;
var rot;
var plane;

var playerSpeed;
var rotSpeed;
var lastTime;


function preload() {
 
 pistol = loadAnimation("assets/2.gif", "assets/3.gif", "assets/4.gif", "assets/5.gif");
 pistolDefault = loadAnimation("assets/1.gif");
 
  pistolAnimation = createSprite(175, 125, 10, 10);
  pistolAnimation.addAnimation("shooting", pistol);
  
  pistolDefaultAnimation = createSprite(175, 125, 10, 10);
  pistolDefaultAnimation.addAnimation("static", pistolDefault);
  
  pistolAnimation.scale = 2.5;
  pistolDefaultAnimation.scale = 2.5;
}

function setup(){
 createCanvas(800, 600);
 
 pos = createVector(18, 13);
 dir = createVector(0, 1);
 plane = createVector(1, 0);
 rot = 0;
 playerSpeed = 0.01;
 rotSpeed = 0.005;
 
 gunShot = false;
 
 for(var i=0; i < worldMap.length; i++){
  for (var j = 0; j < worldMap[0].length; j++) {
   if(worldMap[i][j] === r){
    worldMap[i][j] = Math.floor(Math.random()* 10);
   }
  }
 }
  // console.log(worldMap);
}

function drawMap(){
 
 for (var i = 0; i < worldMap.length; i++) {
    for (var j = 0; j < worldMap[0].length; j++) {
      if (worldMap[i][j] === 1 || worldMap[i][j] === 2 || worldMap[i][j] === 3) {
        fill(0);
        stroke(0);
        rect(i * 20, j * 20, 20, 20);
      }
      // else if (worldMap[i][j] === 5) {
      //   fill(255, 255, 0);
      //   stroke(0);
      //   ellipse(i * 20, j * 20, 20, 20);
      // }
      else {
        fill(255);
        noStroke(0);
        rect(i * 20, j * 20, 20, 20);
      }
    }
  }

  fill(255, 100, 255);
  ellipse(pos.x * 20, pos.y * 20, 20, 20);
  line(pos.x * 20, pos.y * 20, (pos.x + dir.x) * 20, (pos.y + dir.y) * 20);
 
}

function updatePlayer(dt) {
 dir.x = cos(rot);
 dir.y = -sin(rot);
 plane.x = sin(rot);
 plane.y = cos(rot);
 
 if (keyIsDown(65)) {
    rot += rotSpeed * dt;
  }
  if (keyIsDown(68)) {
    rot -= rotSpeed * dt;
  }
  
  if (keyIsDown(87)) {
    if (worldMap[floor(pos.x + dir.x * playerSpeed * dt)][floor(pos.y)] !== 1 &&
        worldMap[floor(pos.x + dir.x * playerSpeed * dt)][floor(pos.y)] !== 2 &&
        worldMap[floor(pos.x + dir.x * playerSpeed * dt)][floor(pos.y)] !== 3) {
      pos.x += dir.x * playerSpeed * dt;
    }
    if (worldMap[floor(pos.x)][floor(pos.y + dir.y * playerSpeed * dt)] !== 1 &&
        worldMap[floor(pos.x)][floor(pos.y + dir.y * playerSpeed * dt)] !== 2 &&
        worldMap[floor(pos.x)][floor(pos.y + dir.y * playerSpeed * dt)] !== 3) {
      pos.y += dir.y * playerSpeed * dt;
    }
  }
  if (keyIsDown(83)) {
    if (worldMap[floor(pos.x - dir.x * playerSpeed * dt)][floor(pos.y)] !== 1 &&
        worldMap[floor(pos.x - dir.x * playerSpeed * dt)][floor(pos.y)] !== 2 &&
        worldMap[floor(pos.x - dir.x * playerSpeed * dt)][floor(pos.y)] !== 3) {
      pos.x -= dir.x * playerSpeed * dt;
    }
    if (worldMap[floor(pos.x)][floor(pos.y - dir.y * playerSpeed * dt)] !== 1 &&
        worldMap[floor(pos.x)][floor(pos.y - dir.y * playerSpeed * dt)] !== 2 &&
        worldMap[floor(pos.x)][floor(pos.y - dir.y * playerSpeed * dt)] !== 3) {
      pos.y -= dir.y * playerSpeed * dt;
    }
  }
  
  if (keyIsDown(81)) {
    if (worldMap[floor(pos.x - plane.x * playerSpeed * dt)][floor(pos.y)] !== 1 &&
        worldMap[floor(pos.x - plane.x * playerSpeed * dt)][floor(pos.y)] !== 2 &&
        worldMap[floor(pos.x - plane.x * playerSpeed * dt)][floor(pos.y)] !== 3) {
      pos.x -= plane.x * playerSpeed * dt;
    }
    if (worldMap[floor(pos.x)][floor(pos.y - plane.y * playerSpeed * dt)] !== 1 &&
        worldMap[floor(pos.x)][floor(pos.y - plane.y * playerSpeed * dt)] !== 2 &&
        worldMap[floor(pos.x)][floor(pos.y - plane.y * playerSpeed * dt)] !== 3) {
      pos.y -= plane.y * playerSpeed * dt;
    }
  }
  if (keyIsDown(69)) {
    if (worldMap[floor(pos.x + plane.x * playerSpeed * dt)][floor(pos.y)] !== 1 &&
        worldMap[floor(pos.x + plane.x * playerSpeed * dt)][floor(pos.y)] !== 2 &&
        worldMap[floor(pos.x + plane.x * playerSpeed * dt)][floor(pos.y)] !== 3) {
      pos.x += plane.x * playerSpeed * dt;
    }
    if (worldMap[floor(pos.x)][floor(pos.y + plane.y * playerSpeed * dt)] !== 1 &&
        worldMap[floor(pos.x)][floor(pos.y + plane.y * playerSpeed * dt)] !== 2 &&
        worldMap[floor(pos.x)][floor(pos.y + plane.y * playerSpeed * dt)] !== 3) {
      pos.y += plane.y * playerSpeed * dt;
    }
  }
}

function keyPressed() {
 if (keyCode === 32){
    // console.log("Gun was shot");
    gunShot = true;
  }
}

function keyReleased(){
 gunShot = false;
}

function raycast() {
  var rayPos = createVector(0,0);
  var rayDir = createVector(0,0);
  
  //cast rays
  for (var x = 0; x < width; x++) {
   
   //take out this for loop for shooting
   
   
    var cameraX = (2 * x / width) - 1;
    rayPos.set(pos.x, pos.y);
    rayDir.set(dir.x + plane.x * cameraX, dir.y + plane.y * cameraX);
    
    var mapX = floor(rayPos.x);
    var mapY = floor(rayPos.y);
    
    var sideDistX;
    var sideDistY;
    
    var scaleX = 1/rayDir.x;
    var scaleY = 1/rayDir.y;
    var deltaDistX = (createVector(1, rayDir.y * scaleX)).mag();
    var deltaDistY = (createVector(1, rayDir.x * scaleY)).mag();
    
    var wallDist;
    
    var stepX;
    var stepY;
    
    var hit = 0;
    var side = 0;
    
    if (rayDir.x < 0) {
      stepX = -1;
      sideDistX = (rayPos.x - mapX) * deltaDistX;
    } else {
      stepX = 1;
      sideDistX = (mapX + 1 - rayPos.x) * deltaDistX;
    }
    
    if (rayDir.y < 0) {
      stepY = -1;
      sideDistY = (rayPos.y - mapY) * deltaDistY;
    } else {
      stepY = 1;
      sideDistY = (mapY + 1 - rayPos.y) * deltaDistY;
    }
    
    //DDA
    while (hit === 0) {
      if (sideDistX < sideDistY) {
        sideDistX += deltaDistX;
        mapX += stepX;
        side = 0;
      } else {
        sideDistY += deltaDistY;
        mapY += stepY;
        side = 1;
      }
      if (worldMap[mapX][mapY] === 1 ||
          worldMap[mapX][mapY] === 2 ||
          worldMap[mapX][mapY] === 3) {
        hit = 1;
      }
      
      if (worldMap[mapX][mapY] === 11){
        // fill(255, 255, 0);
        // stroke(0);
        // ellipse(scaleX, scaleY, 50, 50);
        if (gunShot === true && x >= width*0.47 && x <= width*0.52){
          score++;
        }
        hit = 2;
     }
    }
    
    //calculate the distance to the wall
    if (side === 0) {
      wallDist = abs((mapX - rayPos.x + (1 - stepX) / 2) / rayDir.x);
    } else {
      wallDist = abs((mapY - rayPos.y + (1 - stepY) / 2) / rayDir.y);
    }
    
    var lineHeight = abs(height/wallDist);
    lineHeight = min(lineHeight, height);
    
    if (mapX >= 0 && mapY >= 0) {
      switch (worldMap[mapX][mapY]) {
      case 0:
        break;
      case 1:
        stroke(255, 0, 0);
        break;
      case 2:
        stroke(0, 255, 0);
        break;
      case 3:
        stroke(0, 0, 255);
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      case 7:
        break;
      case 8:
        break;
      case 9:
        break;
      case 11:
        stroke(255, 255, 0);
        break;
      }
    }

    if (side == 1) {
      switch (worldMap[mapX][mapY]) {
      case 1:
        stroke(255/2, 0/2, 0/2);
        break;
      case 2:
        stroke(0, 255/2, 0);
        break;
      case 3:
        stroke(0, 0, 255/2);
        break;
      case 11:
        stroke(255/2, 255/2, 0);
        break;
      }
    }
    
    var startY = height/2 - lineHeight/2;
    line(x, startY, x, startY + lineHeight);
  }
}

function draw(){
 background(155);
 var dt = millis() - lastTime;
 updatePlayer(dt);
 // drawMap();
 raycast();
 
 console.log("Score: " + score);
 
 drawSprite(pistolDefaultAnimation);
 
 if(gunShot == true){
  drawSprite(pistolAnimation);
 }
 
 lastTime = millis();
}