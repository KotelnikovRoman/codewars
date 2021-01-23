#include <iostream>
#include <algorithm>

// my code
int paperwork(int n, int m) {
	return n < 0 || m < 0 ? 0 : n * m;
}

//codewars
auto paperwork2(int n, int m) -> int {
	return n > 0 and m > 0 ? n * m : 0;
}

int paperwork3(int n, int m) {
	// librery algorithm
	return std::max(n, 0) * std::max(m, 0);
}

int main() {
	std::cout << paperwork3(3, 6);
}