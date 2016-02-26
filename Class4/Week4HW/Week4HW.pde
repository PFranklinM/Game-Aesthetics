int rows = 20;
int columns = 20;

int score;

int playerX;
int playerY;

int foodX;
int foodY;

int monsterX;
int monsterY;

char[][] grid = new char[rows][columns];

char player = 'P';

char food = '@';

char monster = 'M';

boolean gameIsOver;

void setup() {
  size(300, 500);
  
  score = 0;
  
  playerX=10;
  playerY=10;
  
  foodX = int(random(0, 20));
  foodY = int(random(0, 20));
  
  monsterX = 0;
  monsterY = 1;
  
  gameIsOver = false;
}

void draw() {
  
  background(0);
  
  textSize(12);
  fill(255);
  
  text("Score: " + score, 125, 400);
  
  if(playerX >= 20){
   playerX = 0; 
  }
  
  if(playerX <= -1){
   playerX = 19; 
  }
  
  if(playerY >= 20){
   playerY = 1; 
  }
  
  if(playerY <= 0){
   playerY = 19; 
  }
  
  for (int i=0; i < rows; i++) {
    for (int j=0; j < columns; j++) {
      
       if((i + j)%2 == 1){
        grid[i][j] = 'o';
      }else {
        grid[i][j] = 'x';
      }
      
      grid[foodX][foodY] = food;
      
      grid[monsterX][monsterY] = monster;
      
      grid[playerX][playerY] = player;
      
      text(grid[i][j], i*15, j*15);
    }
  }
  
  if(playerX == foodX && playerY == foodY){
    score += 100;
    
    foodX = int(random(0, 20));
    foodY = int(random(0, 20));
  }
  
  if(gameIsOver == true){
    
    for (int i=0; i < rows; i++) {
      for (int j=0; j < columns; j++) {
        
        grid[i][j] = 'Q';
        text(grid[i][j], i*15, j*15);
      }
    }
    
    textSize(40);
    fill(255, 0, 0);
    text("GAME OVER!", 25, 150);
  }
}

void keyPressed() {
  int random = int(random(2));
  
  if (key == 'w'){
      playerY--;
    }
    
    if (key == 's'){
      playerY++;
    }
    
    if (key == 'a'){
      playerX--;
    }
    
    if (key == 'd'){
      playerX++;
    }
    
    if(monsterX != playerX && monsterY != playerY){
      
      if(random == 0){
        if(monsterX > playerX){
         monsterX--; 
        }
        
        if(monsterX < playerX){
         monsterX++; 
        }
      }
      
      if(random == 1){
        if(monsterY > playerY){
         monsterY--; 
        }
        
        if(monsterY < playerY){
         monsterY++; 
        }
      }
    }
    
       else if(random == 0){
        if(monsterX > playerX){
         monsterX--; 
        }
        
        if(monsterX < playerX){
         monsterX++; 
        }
      }
      
      else if(random == 1){
        if(monsterY > playerY){
         monsterY--; 
        }
        
        if(monsterY < playerY){
         monsterY++; 
        }
      }
    
    if(monsterX == playerX && monsterY == playerY){
      gameIsOver = true;
    }
}