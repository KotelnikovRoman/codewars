def simple_multiplication(number):
    if number % 2 == 0:
        return number * 8
    return number * 9

#codewars
def simple_multiplication2(n):
    return n * 9 if n % 2 else n * 8

def simple_multiplication3(n):
    return n * (8 + n % 2)

print(simple_multiplication3(3))