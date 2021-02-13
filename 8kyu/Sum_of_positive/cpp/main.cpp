#include <iostream>
using namespace std;
#include <vector>
#include <numeric>

//my code
int positive_sum(const vector<int> arr) {
	int N = size(arr);
	int number = 0;
	for (int i = 0; i < N; i++) {
		if (arr[i] > 0) {
			number += arr[i];
		}
	}
	return number;
}

//codewars
int positive_sum2(const vector<int> &arr) {
	int sum = 0;
	for (int i = 0; i < arr.size(); i++) {
		if (arr[i] > 0) sum += arr[i];
	}
	return sum;
}

int positive_sum3(const vector<int> arr) {
	return accumulate(
		arr.begin(), arr.end(), 0, [](int a, int b) {
			return a + max(0, b);
		}
	);
}

int positive_sum4(const vector<int> arr) {
	int sum = 0;
	for (int i : arr) {
		sum += i > 0 ? i : 0;
	}
	return sum;
}

int positive_sum5(const vector<int>& xs) {
	int sum = 0;
	for (auto x : xs) {
		if (x > 0) sum += x;
	}
	return sum;
}

int positive_sum6(const vector<int> arr) {
	int result = 0;
	for (auto x : arr) if (x > 0) result += x;
	return result;
}

int main() {
	const vector<int> arr = { 2, -3, 5, 7, 1, 0, -1, 0 };

	cout << positive_sum6(arr) << endl;
}