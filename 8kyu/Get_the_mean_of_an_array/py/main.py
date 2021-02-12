import math

# my code


def get_average(marks):
    return int(sum(marks) / len(marks))
    raise NotImplementedError("TODO: get_average")

# codewars


def get_average2(marks):
    return sum(marks) // len(marks)


def get_average3(marks):
    return sum(n for n in marks) // len(marks)


def get_average4(marks):
    return math.floor(sum(marks) / len(marks))


def get_average5(marks):
    return int(__import__("statistics").mean(marks))


print(get_average([2, 2, 2, 2]))
