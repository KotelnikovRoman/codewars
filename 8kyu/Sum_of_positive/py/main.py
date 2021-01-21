def positive_sum(arr):
    for x in range(len(arr)):
        number = 0
        if arr[x] > 0:
            number += arr[x]
    return number
