#include <iostream>
#include <string>
using namespace std;

class Room {
public:
	string description;	
	bool canGoNorth;
	bool canGoEast;
	bool canGoSouth;
	bool canGoWest;

	bool dieIfRetreat;
};


int main() {
	string input;

	int x = 2;
	int y = 0;

	Room map[3][3];


	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 3; j++) {
			map[j][i].description = "There's nothing here!";	
			map[j][i].canGoNorth = false;
			map[j][i].canGoEast = false;	
			map[j][i].canGoWest = false;
			map[j][i].canGoSouth = false;

			map[j][i].dieIfRetreat = false;
		}
	}

	map[2][0].description = "You find yourself in a dark room. A single candle shows a wooden door to your west. You hear muffled voices behind the door. Which way do you go?";
	map[2][0].canGoWest = true;

	map[1][0].description = "You find yourself in a similarly dark room. Another door is to your west. The voices are a little louder now. Do you continue west or go back east?";
	map[1][0].canGoWest = true;
	map[1][0].canGoEast = true;

	map[0][0].description = "You find yourself in a damp dungeon, rusty torture devices are scattered all over the room. A metal door stands to the south. You think you see a few drops of blood going under the southern door. Do you continue south or go back east?";
	map[0][0].canGoEast = true;
	map[0][0].canGoSouth = true;

	map[0][1].description = "More dungeon equipment. However, the room seems somewhat...organic. You canfeel multiple eyes watching you. Another door stands to the east. It's made of metal but it looks like something is dripping from it. On closer inspection you see that it's blood. Do you continue east or go back north?";
	map[0][1].canGoNorth = true;
	map[0][1].canGoEast = true;

	map[1][1].description = "Yup. You are defintely following a trail of blood. The entire room is painted in flesh tones and seems to be...breathing. There is a door to your east. It's spongy to the touch. Do you continue east or go back west?";
	map[1][1].canGoWest = true;
	map[1][1].canGoEast = true;

	map[2][1].description = "There is an audible breathing sound now. It is coming from all around you. The floor has some give to it as if you were walking on tightly packed sand. There is a door to your south. You could have sworn you saw the door wink at you. But that's crazy, the door doesn't have any eyes. Do you continue south or go back west?";
	map[2][1].canGoWest = true;
	map[2][1].canGoSouth = true;

	map[2][2].description = "There is blood everywhere. Even hanging in the air. You feel a strong wind, but after a few seconds realize that the blood hanging in the air is actually...moving. Doubt begins to enter your mind. The eyes on the door to your north are much friendlier than the judgmental eyes on the door to your west. Plus the door to your west said that rude thing about your mother. Do you continue west just to spite the mean door or go back north through the friendly door?";
	map[2][2].canGoNorth = true;
	map[2][2].canGoWest = true;
	map[2][2].dieIfRetreat = true;

	map[1][2].description = "You find yourself in a wide open field. Sun brightly shining and birds chirping. You kinda like it here, but you don't really like the looks of those vending machines over there. A door to your west pulls you forward. I guess you can go back east too, if you really want. Which way do you go?";
	map[1][2].canGoWest = true;
	map[1][2].canGoEast = true;
	map[1][2].dieIfRetreat = true;

	map[0][2].description = "The door closes and locks behind you. The room is pitch black. All you can hear is the sound of breathing around you as you slowly get digested for all eternity.";

	while (input != "Q") {

		// cout << "you are at " << x << " " << y << endl;
		cout << map[x][y].description << endl;

		cin >> input;

		for (int i = 0; i < input.size(); i++) {
			input.at(i) = toupper(input.at(i));
		}


		if (input == "NORTH" || input == "GO NORTH") {
			if (map[x][y].canGoNorth == true) {
				y--;
			} else {
				cout << "You bash your head into a wall." << "\n\n";
			}
		} else if (input == "EAST" || input == "GO EAST") {
			if (map[x][y].canGoEast == true) {
				x++;
			} else {
				cout << "You bash your head into a wall." << "\n\n";
			}
		} else if (input == "SOUTH" || input == "GO SOUTH") {
			if (map[x][y].canGoSouth == true) {
				y++;				
			} else {
				cout << "You bash your head into a wall." << "\n\n";
			}
		} else if (input == "WEST" || input == "GO WEST") {
			if (map[x][y].canGoWest == true) {
				x--;				
			} else {
				cout << "You bash your head into a wall." << "\n\n";
			}


		} else {
			cout << "I don't understand " << input << "\n";
		}

		if (input == "NORTH" && x == 2 && y == 1){
			map[2][1].description = "The demon that's been stalking you digs it's claws into your stomach. As you lose consciousness you see the door to your south laughing at you. You absolutely hate that door.";
			map[2][1].canGoWest = false;
			map[2][1].canGoSouth = false;
		}

		if (input == "EAST" && x == 2 && y == 2){
			map[2][2].description = "You open the door and fall forever.";
			map[2][2].canGoWest = false;
			map[2][2].canGoEast = false;
		}

	}
		// map[x][y] = 'O';

	// 	for (int i = 0; i < 10; i++) {
	// 		for (int j = 0; j < 10; j++) {
	// 			cout << map[j][i] << "|";
	// 		}
	// 		cout << endl;
	// 	}
	// }
	return 0;
}