def papervork(n, m):
    return max(0, n) * max(0, m)

# codewars


def papervork2(n, m):
    n * m if n > 0 or m > 0 else 0


def papervork3(a, b): return a * b if min(a, b) > 0 else 0


def papervork4(n, m):
    return n * m * int(n > 0 and m > 0)


def papervork5(n, m):
    return n * m * (n > 0) * (m > 0)


print(papervork5(2, 5))
