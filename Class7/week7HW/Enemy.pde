class Enemy {
  
  PVector enemyPos;
  int dir;
  float speed;
  color c;
  
  Enemy() {
    enemyPos = new PVector(17.5, 17.5);
    dir = UP;
    speed = 0.1;
    c = color(255, 0, 0);
  }
  
  boolean spaceEmpty(int d) {
    float skipSpace = 0.15;
    switch (d) {
    case UP:
      return (map[(int)(floor(enemyPos.x))][(int)(enemyPos.y-speed-0.5)] == 0 &&
        map[(int)(floor(enemyPos.x-skipSpace))][(int)(enemyPos.y-speed-0.5)] == 0 &&
        map[(int)(floor(enemyPos.x+skipSpace))][(int)(enemyPos.y-speed-0.5)] == 0);
    case DOWN:
      return (map[(int)(floor(enemyPos.x))][(int)(enemyPos.y+speed+0.5)] == 0 &&
        map[(int)(floor(enemyPos.x-skipSpace))][(int)(enemyPos.y+speed+0.5)] == 0 &&
        map[(int)(floor(enemyPos.x+skipSpace))][(int)(enemyPos.y+speed+0.5)] == 0);
    case LEFT:
      return (map[(int)(enemyPos.x-speed-0.5)][(int)(floor(enemyPos.y))] == 0 &&
        map[(int)(enemyPos.x-speed-0.5)][(int)(floor(enemyPos.y-skipSpace))] == 0 &&
        map[(int)(enemyPos.x-speed-0.5)][(int)(floor(enemyPos.y+skipSpace))] == 0);
    case RIGHT:
      return (map[(int)(enemyPos.x+speed+0.5)][(int)(floor(enemyPos.y))] == 0 &&
        map[(int)(enemyPos.x+speed+0.5)][(int)(floor(enemyPos.y-skipSpace))] == 0 &&
        map[(int)(enemyPos.x+speed+0.5)][(int)(floor(enemyPos.y+skipSpace))] == 0);
    default:
      return false;
    }
  }
  
  void move(){
    
    if(keyPressed == true){
      float rando = floor(random(0, 4));
        
        if(rando == 0 && spaceEmpty(LEFT)){
         dir = LEFT;
        }
        
        if(rando == 1 && spaceEmpty(RIGHT)){
        dir = RIGHT; 
        }
        
        if(rando == 2 && spaceEmpty(UP)){
         dir = UP;
        }
        
        if(rando == 3 && spaceEmpty(DOWN)){
         dir = DOWN;
        }
    }


    switch (dir) {
    case UP:
      if (spaceEmpty(UP)) {
        enemyPos.y -= speed;
        enemyPos.x = floor(enemyPos.x) + 0.5;
      } else {
        enemyPos.x = floor(enemyPos.x) + 0.5;
        enemyPos.y = floor(enemyPos.y) + 0.5;
        
        //float rando = floor(random(0, 4));
        
        //println(rando);
        
        //if(rando == 0){
        //  dir = LEFT;
        //}
        
        //if(rando == 1){
        // dir = RIGHT; 
        //}
        
        //if(rando == 2){
        //  dir = UP;
        //}
        
        //if(rando == 3){
        //  dir = DOWN;
        //}
        
        if(enemyPos.x > p.pos.x){
         dir = LEFT;
        }
        
        else if(enemyPos.x < p.pos.x){
        dir = RIGHT; 
        }
        
        else if(enemyPos.y > p.pos.y){
         dir = UP;
        }
        
        else if(enemyPos.y < p.pos.y){
         dir = DOWN;
        }
        
      }
      break;
    case DOWN:
      if (spaceEmpty(DOWN)) {
        enemyPos.y += speed;
        enemyPos.x = floor(enemyPos.x) + 0.5;
      } else {
        enemyPos.x = floor(enemyPos.x) + 0.5;
        enemyPos.y = floor(enemyPos.y) + 0.5;
        
        //float rando = floor(random(0, 4));
        
        //if(rando == 0){
        //  dir = LEFT;
        //}
        
        //if(rando == 1){
        // dir = RIGHT; 
        //}
        
        //if(rando == 2){
        //  dir = UP;
        //}
        
        //if(rando == 3){
        //  dir = DOWN;
        //}
        
        if(enemyPos.x > p.pos.x){
         dir = LEFT;
        }
        
        else if(enemyPos.x < p.pos.x){
        dir = RIGHT; 
        }
        
        else if(enemyPos.y > p.pos.y){
         dir = UP;
        }
        
        else if(enemyPos.y < p.pos.y){
         dir = DOWN;
        }
        
      }
      break;
    case LEFT:
      if (spaceEmpty(LEFT)) {
        enemyPos.x -= speed;
        enemyPos.y = floor(enemyPos.y) + 0.5;
      } else {
        enemyPos.x = floor(enemyPos.x) + 0.5;
        enemyPos.y = floor(enemyPos.y) + 0.5;
        
        //float rando = floor(random(0, 4));
        
        //if(rando == 0){
        //  dir = LEFT;
        //}
        
        //if(rando == 1){
        // dir = RIGHT; 
        //}
        
        //if(rando == 2){
        //  dir = UP;
        //}
        
        //if(rando == 3){
        //  dir = DOWN;
        //}
        
        if(enemyPos.x > p.pos.x){
         dir = LEFT;
        }
        
        else if(enemyPos.x < p.pos.x){
        dir = RIGHT; 
        }
        
        else if(enemyPos.y > p.pos.y){
         dir = UP;
        }
        
        else if(enemyPos.y < p.pos.y){
         dir = DOWN;
        }
        
      }
      break;
    case RIGHT:
      if (spaceEmpty(RIGHT)) {
        enemyPos.x += speed;
        enemyPos.y = floor(enemyPos.y) + 0.5;
      } else {
        enemyPos.x = floor(enemyPos.x) + 0.5;
        enemyPos.y = floor(enemyPos.y) + 0.5;
        
        //float rando = floor(random(0, 4));
        
        //if(rando == 0){
        //  dir = LEFT;
        //}
        
        //if(rando == 1){
        // dir = RIGHT; 
        //}
        
        //if(rando == 2){
        //  dir = UP;
        //}
        
        //if(rando == 3){
        //  dir = DOWN;
        //}
       
        if(enemyPos.x > p.pos.x){
         dir = LEFT;
        }
        
        else if(enemyPos.x < p.pos.x){
        dir = RIGHT; 
        }
        
        else if(enemyPos.y > p.pos.y){
         dir = UP;
        }
        
        else if(enemyPos.y < p.pos.y){
         dir = DOWN;
        }
       
      }
      break;
    default:
      break;
    }
    
  }
  
  
  void display() {
    fill(200);
    noStroke();
    rect(floor(enemyPos.x) * sizeMult, floor(enemyPos.y) * sizeMult, sizeMult, sizeMult);
    fill(c);
    stroke(0);
    ellipse(enemyPos.x * sizeMult, enemyPos.y * sizeMult, sizeMult/1, sizeMult/1);
    c = color(255, 0, 0);
  }
  
}