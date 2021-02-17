#include <iostream>
#include <vector>
//for min2, max2
#include <algorithm>
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

//codewars
int min2(vector<int> list) {
	return *(min_element(list.begin(), list.end()));
}

int max2(vector<int> list) {
	return *(max_element(list.begin(), list.end()));
}

int min3(vector<int> list) {
	return *min_element(begin(list), end(list));
}

int max3(vector<int> list) {
	return *max_element(begin(list), end(list));
}

int main() {
	vector<int> arr = { 2, 5, 0, 7, -1, 10 };
	cout << min3(arr) << endl;
	cout << max3(arr) << endl;

	return 0;
}