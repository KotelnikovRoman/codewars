#include <iostream>
using namespace std;

bool hero(int bullets, int dragons) {
	return bullets / 2 >= dragons;
}

//codewars
bool hero2(int bullets, int dragons) {
	return dragons <= bullets >> 1;
}

int main() {
	return hero2(10, 3);
}