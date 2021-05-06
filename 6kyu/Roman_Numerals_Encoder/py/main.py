roman_units = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
roman_tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
roman_hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
roman_thousands = ["M", "MM", "MMM"]
roman_numbers = [roman_units, roman_tens, roman_hundreds, roman_thousands]
index = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

def solution(n):
    num = str(n)
    N = len(num)
    numbers = ["", "", "", ""]
    y = 0

    for i in range(N - 1, -1, -1):
        for j in range(len(index)):
            if num[i] == index[j]:
                numbers[y] = roman_numbers[y][j]
                y += 1

    print(numbers[3] + numbers[2] + numbers[1] + numbers[0])


solution(300)
