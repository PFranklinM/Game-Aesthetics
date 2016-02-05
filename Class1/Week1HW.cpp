#include <iostream>
using namespace std;

class Player{

public:
	Player(int _x = 1, int _y = 1, int _vx = 1, int _vy = 1);
	void update(int r, int c);
	int getX();
	int getY();

// private:
	int x;
	int y;
	int vx;
	int vy;
};

Player::Player(int _x, int _y, int _vx, int _vy):
	x(_x),
	y(_y),
	vx(_vx),
	vy(_vy)
{}

void Player::update(int r, int c){

	char input;

	cin >> input;

	if(input == 'a'){
		x -= vx;
	}

	if(input == 'd'){
		x += vx;
	}

	if (input == 'w'){
		y -= vy;
	}

	if (input == 's'){
		y += vy;
	}
}

int Player::getX(){
	return x;
}

int Player::getY(){
	return y;
}

class Food{

public:
	Food(int _x = rand() % 15, int _y = rand() % 15);
	void update(int r, int c);
	int getX();
	int getY();

// private:
	int x;
	int y;
};

Food::Food(int _x, int _y):
	x(_x),
	y(_y)
{}

void Food::update(int r, int c){

	x = rand() % 15;
	y = rand() % 15;

}

int Food::getX(){
	return x;
}

int Food::getY(){
	return y;
}

int main(){

	Player player;
	Food food;

	const int ROWS = 15;
	const int COLS = 15;
	char grid [COLS] [ROWS];

	int score = 0;

	bool scoreIsGoingUp = false;

	for (int i = 0; i < ROWS; i++){
		for (int j = 0; j < COLS; j++){
			grid [j] [i] = '*';
		}
	}

	char input;

	while (input != 'q'){

		player.update(ROWS, COLS);
		// food.update(ROWS, COLS);

		if(player.x == food.x && player.y == food.y){
			score += 10;
			food.update(ROWS, COLS);

			scoreIsGoingUp = true;
		}

		grid[food.getX()][food.getY()] = '?';
		grid[player.getX()][player.getY()] = 'S';

		while (scoreIsGoingUp == true){
			grid[player.getX()][player.getY()-1] = 's';
			scoreIsGoingUp = false;
		}

		cout << "Score: " << score << endl;

		for (int i = 0; i < ROWS; i++){
			for (int j = 0; j < COLS; j++){

				cout << grid[j][i];
			}
			cout << endl;
		}

		for (int i = 0; i < ROWS; i++){
			for (int j = 0; j < COLS; j++){
			
				grid [j] [i] = '*';
			}
		}

		cin >> input;
	}


	return 0;
}