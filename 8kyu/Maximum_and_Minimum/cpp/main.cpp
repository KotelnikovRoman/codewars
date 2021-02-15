#include <iostream>
#include <vector>
using namespace std;

int min(vector<int> list) {
	int min_n = list[0];
	
	for (int i = 0; i < size(list); i++) {
		if (min_n > list[i]) {
			min_n = list[i];
		}
	}

	return min_n;
}

int max(vector<int> list) {
	int max_n = list[0];

	for (int i = 0; i < size(list); i++) {
		if (max_n < list[i]) {
			max_n = list[i];
		}
	}

	return max_n;
}

int main() {
	vector<int> arr = { 2, 5, 0, 7, -1, 10 };
	cout << max(arr) << endl;
}