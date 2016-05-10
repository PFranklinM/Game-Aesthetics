//This is player 3

var score = 0;

var r;

var shotCounter = 0;

//interact with level change level by interacting with it

var pistol;
var pistolDefault;
var gunShot;

var pistolAnimation;
var pistolDefaultAnimation;

var worldMap = [
 //36X26

 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 [1, 0, 0, 0, 0, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 0, 0, 0, 0, 1],
 [1, 0, 0, 0, 0, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 0, 0, 0, 0, 1],
 [1, 0, 0, 0, 0, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 0, 0, 0, 0, 1],
 [1, 0, 0, 0, 0, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 0, 0, 0, 0, 1],
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
 [1, r, r, r, r, r, r, r, r, r, r, 0, 0, 0, 0, r, r, r, r, r, r, r, r, r, r, 1],
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
 [1, 0, 0, 0, 0, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 0, 0, 0, 0, 1],
 [1, 0, 0, 0, 0, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 0, 0, 0, 0, 1],
 [1, 0, 0, 0, 0, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 0, 0, 0, 0, 1],
 [1, 0, 0, 0, 0, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, 0, 0, 0, 0, 1],
 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var pos;
var dir;
var rot;
var plane;

var sprites = [];
var spritesDir = [];
var zBuffer = [];
var spriteOrder = [];
var spriteDistance = [];

var spriteCenterOrder = [];
var spriteCenterDistance = [];

var p2StandingFront;
var p2StandingBack;
var p2StandingRight;
var p2StandingLeft;

var p2StandingAnimation;

var playerSpeed;
var rotSpeed;
var lastTime;

var gunCycleCompleted = false;

var health;

var socket;
// var url = '149.31.200.6';
var url = '192.168.0.5';
var port = 3000;
socket = io.connect(url+':'+port);//create instance of socket io

// var socket = io();

// var socket = io.connect('http://localhost:3000');


function preload() {

 pistol = loadAnimation("assets/2.gif", "assets/3.gif", "assets/4.gif", "assets/5.gif");
 pistolDefault = loadAnimation("assets/1.gif");

 p2StandingFront = loadAnimation("assets/char1_1A.png");

 pistolAnimation = createSprite(175, 125, 10, 10);
 pistolAnimation.addAnimation("shooting", pistol);

 pistolDefaultAnimation = createSprite(175, 125, 10, 10);
 pistolDefaultAnimation.addAnimation("static", pistolDefault);

 pistolAnimation.scale = 2.5;
 pistolDefaultAnimation.scale = 2.5;
}

function setup() {
 createCanvas(800, 600);

 pos = createVector(20, 12);
 dir = createVector(0, 1);
 plane = createVector(1, 0);
 rot = 0;
 playerSpeed = 0.01;
 rotSpeed = 0.005;
 
 health = 100;

 sprites = [{
  //player1
  pos: createVector(17, 12)
 
  
 }, {
  //player2
  pos: createVector(20, 15)
 }, {
  //player4
  pos: createVector(17, 15)
 }];

 spritesDir = [{
  dir: createVector(0, 1)
 }, {
  dir: createVector(0, 1)
 }, {
  dir: createVector(0, 1)
 }];

 // p2Pos = createVector(17, 14);

 gunShot = false;

 currentAnimation = pistolAnimation.getAnimationLabel();
 
}

function drawMap() {

 for (var i = 0; i < worldMap.length; i++) {
  for (var j = 0; j < worldMap[0].length; j++) {
   if (worldMap[i][j] === 1 || worldMap[i][j] === 2 || worldMap[i][j] === 3) {
    fill(0);
    stroke(0);
    rect(i * 20, j * 20, 20, 20);
   } else {
    fill(255);
    noStroke(0);
    rect(i * 20, j * 20, 20, 20);
   }
  }
 }

 fill(255, 100, 255);
 ellipse(pos.x * 20, pos.y * 20, 20, 20);
 line(pos.x * 20, pos.y * 20, (pos.x + dir.x) * 20, (pos.y + dir.y) * 20);


 for (var i = 0; i < sprites.length; i++) {
  for (var j = 0; j < spritesDir.length; j++) {
   fill(255, 0, 0);
   ellipse(sprites[i].pos.x * 20, sprites[i].pos.y * 20, 20, 20);
   line(sprites[i].pos.x * 20, sprites[i].pos.y * 20, (sprites[i].pos.x + spritesDir[j].dir.x) * 20, (sprites[i].pos.y + spritesDir[j].dir.y) * 20);
  }
 }
}

function updatePlayer(dt) {
 dir.x = cos(rot);
 dir.y = -sin(rot);
 plane.x = sin(rot);
 plane.y = cos(rot);

 // for (var j = 0; j < spritesDir.length; j++){
 //  spritesDir[j].dir.x = cos(rot);
 //  spritesDir[j].dir.y = dir.y = -sin(rot);
 // }

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
 
 socket.emit('player3XPosition', { position3X: pos.x });
 socket.emit('player3YPosition', { position3Y: pos.y });

}

// function keyPressed() {
//  if (keyCode === 32) {
//   gunShot = true;
//  }
// }

function keyReleased() {
 gunShot = false;
}

function raycast() {
 var rayPos = createVector(0, 0);
 var rayDir = createVector(0, 0);

 //cast rays
 for (var x = 0; x < width; x++) {


  var cameraX = (2 * x / width) - 1;
  rayPos.set(pos.x, pos.y);
  rayDir.set(dir.x + plane.x * cameraX, dir.y + plane.y * cameraX);

  var mapX = floor(rayPos.x);
  var mapY = floor(rayPos.y);

  var sideDistX;
  var sideDistY;

  var scaleX = 1 / rayDir.x;
  var scaleY = 1 / rayDir.y;
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

   // if (worldMap[mapX][mapY] === 11) {
   //  if (gunShot === true && x >= width * 0.47 && x <= width * 0.52) {
   //   score++;
   //  }
   //  hit = 2;
   // }
  }

  //calculate the distance to the wall
  if (side === 0) {
   wallDist = abs((mapX - rayPos.x + (1 - stepX) / 2) / rayDir.x);
  } else {
   wallDist = abs((mapY - rayPos.y + (1 - stepY) / 2) / rayDir.y);
  }

  var lineHeight = abs(height / wallDist);
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
     // stroke(255, 255, 0);
     break;
   }
  }

  if (side == 1) {
   switch (worldMap[mapX][mapY]) {
    case 1:
     stroke(255 / 2, 0 / 2, 0 / 2);
     break;
    case 2:
     stroke(0, 255 / 2, 0);
     break;
    case 3:
     stroke(0, 0, 255 / 2);
     break;
    case 11:
     // stroke(255/2, 255/2, 0);
     break;
   }
  }

  var startY = height / 2 - lineHeight / 2;
  line(x, startY, x, startY + lineHeight);

  //set zbuffer position to wall dist
  zBuffer[x] = wallDist;
 }
}

function compareSprites(a, b) {
 return b.value - a.value;
}


function raycastSprites() {


 //sort sprites
 for (var i = 0; i < sprites.length; i++) {
  spriteOrder[i] = i;
  spriteDistance[i] = ((pos.x - sprites[i].pos.x) * (pos.x - sprites[i].pos.x) + (pos.y - sprites[i].pos.y) * (pos.y - sprites[i].pos.y));
 }

 var mappedOrder = spriteOrder.map(function(order, i) {
  return {
   index: i,
   value: spriteDistance[i]
  };
 });
 mappedOrder.sort(compareSprites);

 for (var i = 0; i < mappedOrder.length; i++) {
  spriteOrder[i] = mappedOrder[i].index;
 }

 for (var i = 0; i < sprites.length; i++) {
  var spriteX = sprites[spriteOrder[i]].pos.x - pos.x;
  var spriteY = sprites[spriteOrder[i]].pos.y - pos.y;

  var invDet = 1.0 / (plane.x * dir.y - dir.x * plane.y);
  var transformX = invDet * (dir.y * spriteX - dir.x * spriteY);
  var transformY = invDet * (-plane.y * spriteX + plane.x * spriteY);

  var spriteScreenX = floor((width / 2) * (1 + transformX / transformY));

  //calculate height of the sprite on screen
  var spriteHeight = abs(floor(height / transformY));
  var drawStartY = -spriteHeight / 2 + height / 2;
  if (drawStartY < 0) {
   drawStartY = 0;
  }
  var drawEndY = spriteHeight / 2 + height / 2;
  if (drawEndY >= height) {
   drawEndY = height - 1;
  }

  var spriteWidth = abs(floor(height / transformY));
  var drawStartX = floor(-spriteWidth / 2 + spriteScreenX);
  if (drawStartX < 0) {
   drawStartX = 0;
  }
  var drawEndX = floor(spriteWidth / 2 + spriteScreenX);
  if (drawEndX >= width) {
   drawEndX = width - 1;
  }


  //draw every vertical stripe of the sprite on screen
  for (var stripe = drawStartX; stripe < drawEndX; stripe++) {
   if (transformY > 0 && stripe > 0 && stripe < width && transformY < zBuffer[stripe]) {

    if (gunShot === true && stripe >= width * 0.509 && stripe <= width * 0.52) {
     
     if(spriteOrder[i] === 0){

       if(shotCounter >= 20){
        score++;
        // console.log("Score: " + score);

        console.log("2 was hit");

        shotCounter = 0;
       }
      }
      
      if(spriteOrder[i] === 1){

       if(shotCounter >= 20){
        score++;
        // console.log("Score: " + score);

        console.log("3 was hit");

        shotCounter = 0;
       }
      }
      
      if(spriteOrder[i] === 2){

       if(shotCounter >= 20){
        score++;
        // console.log("Score: " + score);

        console.log("4 was hit");

        shotCounter = 0;
       }
      }
    }
    
    // console.log(transformX);
    // console.log(spriteScreenX);

    stroke(spriteOrder[i] * 100);
    line(stripe, drawStartY, stripe, drawEndY);
   }
  }
 }

 // p2StandingAnimation = createSprite(p2Pos.x, p2Pos.y, 10, 10);
 // p2StandingAnimation.addAnimation("p2StandingStill", p2StandingFront);

 // p2StandingAnimation.scale = 2.5;
}


function draw() {
 background(155);
 var dt = millis() - lastTime;
 updatePlayer(dt);
 // drawMap();
 raycast();

 raycastSprites();

 drawSprite(p2StandingAnimation);

 drawSprite(pistolDefaultAnimation);
 
 textSize(40);
 text("Health: " + health, 10, 50);
 fill(0, 102, 153);

 if (keyIsDown(32)) {
  gunShot = true;
  
  // socket.emit('new message');
 }

 if (gunShot == true) {
  drawSprite(pistolAnimation);
  shotCounter++;
 }

 lastTime = millis();
}


socket.on('player1XPositionUpdated', function (data1) {
 
 for(key in data1) {
    if(data1.hasOwnProperty(key)) {
        var position1X = data1[key];
        
        sprites[0].pos.x = position1X[key];
        // console.log(position1X[key]);
        
    }
 }
});

socket.on('player1YPositionUpdated', function (data2) {
 
 for(key in data2) {
    if(data2.hasOwnProperty(key)) {
        var position1Y = data2[key];
        
        sprites[0].pos.y = position1Y[key];
        // console.log(position1Y[key]);
        
    }
 }
});


socket.on('player2XPositionUpdated', function (data3) {
 
 for(key in data3) {
    if(data3.hasOwnProperty(key)) {
        var position2X = data3[key];
        
        sprites[1].pos.x = position2X[key];
        // console.log(position2X[key]);
        
    }
 }
});

socket.on('player2YPositionUpdated', function (data4) {
 
 for(key in data4) {
    if(data4.hasOwnProperty(key)) {
        var position2Y = data4[key];
        
        sprites[1].pos.y = position2Y[key];
        // console.log(position2Y[key]);
        
    }
 }
});


socket.on('player3XPositionUpdated', function (data5) {
 
 // for(key in data5) {
 //    if(data5.hasOwnProperty(key)) {
 //        var position3X = data5[key];
        
 //        sprites[1].pos.x = position3X[key];
 //        // console.log(position3X[key]);
        
 //    }
 // }
});

socket.on('player3YPositionUpdated', function (data6) {
 
 // for(key in data6) {
 //    if(data6.hasOwnProperty(key)) {
 //        var position3Y = data6[key];
        
 //        sprites[1].pos.y = position3Y[key];
 //        // console.log(position3Y[key]);
        
 //    }
 // }
});


socket.on('player4XPositionUpdated', function (data7) {

 for(key in data7) {
    if(data7.hasOwnProperty(key)) {
        var position4X = data7[key];
        
        sprites[2].pos.x = position4X[key];
        // console.log(position4X[key]);
        
    }
 }
});

socket.on('player4YPositionUpdated', function (data8) {
 
  for(key in data8) {
    if(data8.hasOwnProperty(key)) {
        var position4Y = data8[key];
        
        sprites[2].pos.y = position4Y[key];
        // console.log(position4Y[key]);
        
    }
 }
});

// socket.on('worldMapDataUpdated', function (data9) {
//  var worldMapVar = [];
 
//  worldMapVar.push(data9);
 
//  for (var i = 0; i < worldMap.length; i++) {
//   for (var j = 0; j < worldMap[0].length; j++) {
//    if (worldMap[i][j] === r) {
//     worldMap[i][j] = worldMapVar;
//    }
//   }
//  }
//  // console.log(worldMap);
// });

// socket.on('test message', function (data) {
//    console.log("test");
//  });