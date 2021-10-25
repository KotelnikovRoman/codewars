def digitize(n):
    arr = []
    n_str = str(n)
    for i in range(len(n_str)):
        arr.append(int(n_str[i]))
    arr.reverse()
    return arr

def digitize2(n):
    return list(map(int, str(n)[::-1]))


print(digitize2(321095))