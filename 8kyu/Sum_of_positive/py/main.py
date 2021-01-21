
# my code
import itertools


def positive_sum(arr):
    for x in range(len(arr)):
        number = 0
        if arr[x] > 0:
            number += arr[x]
    return number


# codewars
def positive_sum2(arr):
    return sum(x for x in arr if x > 0)


def positive_sum3(arr):
    number = []

    for i in arr:
        if i > 0:
            number.append(i)

    return sum(number)


def positive_sum4(arr):
    nums = [i for i in arr if i > 0]
    return sum(nums)


my_number = positive_sum4([5, 0, 3, -3, 5])

print(my_number)
