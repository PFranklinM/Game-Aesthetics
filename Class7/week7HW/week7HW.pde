Player p;
Enemy e;
float sizeMult;

int[][] map = new int[][] 
 {{1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1}, 
  {1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1}, 
  {1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1}, 
  {1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1}, 
  {1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1}, 
  {1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1}, 
  {1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1}, 
  {1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1}, 
  {1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1}, 
  {1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1}, 
  {1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1}, 
  {1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1}, 
  {1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1}, 
  {1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1}, 
  {1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1}, 
  {1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1}, 
  {1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1}, 
  {1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1},
  {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1}};

int[][] dot = new int[map.length][map[0].length];

void setup() {
  size(248, 248);
  sizeMult = width/map.length;
  //pixelDensity(2);
  noSmooth();
  p = new Player();
  e = new Enemy();

  for (int i = 0; i < map.length; i++) {
    for (int j = 0; j < map[0].length; j++) {
      if (map[i][j] == 0) {
        dot[i][j] = 1;
      }
    }
  }
  
}

void draw() {
  background(255);
  p.getInput();
  p.move();
  e.move();
  
  rectMode(CORNER);
  for (int i = 0; i < map.length; i++) {
    for (int j = 0; j < map[0].length; j++) {
      if (map[i][j] == 1) {
        fill(150);
        stroke(100);
        rect(i*sizeMult, j*sizeMult, sizeMult, sizeMult);
      }
      if (dot[i][j] == 1) {
        stroke(0);
        fill(255);
        ellipse((i + 0.5)*sizeMult, (j + 0.5)*sizeMult, sizeMult/5, sizeMult/5);
      }
    }
  }
  p.display();
  e.display();
  Keyboard.reset();
  
  float death = dist(e.enemyPos.x, e.enemyPos.y, p.pos.x, p.pos.y);
  
  if(death < 1){
    background(255, 0, 0);
    p.speed = 0;
    e.speed = 0;
  }
}


void keyPressed() {
  if (key == CODED) {
    Keyboard.isKeyDown(keyCode);
  }
}

void keyReleased() {
  if (key == CODED) {
    Keyboard.isKeyUp(keyCode);
  }
}