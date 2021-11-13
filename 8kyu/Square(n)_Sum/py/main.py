def square_sum(numbers):
    N = len(numbers)
    sum = 0
    for i in range(N):
        sum += numbers[i] * numbers[i]
    return sum

#codewars
def square_sum2(numbers):
    return sum(x ** 2 for x in numbers)

def square_sum3(numbers):
    return sum(x * x for x in numbers)

def square_sum4(numbers):
    return sum([x * x for x in numbers])

def square_sum5(numbers):
    sum = 0
    for x in numbers:
        sum += x * x
    return sum

print(square_sum5([1, 2, 2]))