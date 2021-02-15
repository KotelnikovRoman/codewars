from collections import Counter

# my code


def solve(st, k):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    ALFA_MAX = len(alphabet)
    arr = []

    while k > 0 and st != "":
        for i in range(ALFA_MAX):
            n = st.count(alphabet[i])
            if n > 0:
                if n < k:
                    st = st.replace(alphabet[i], '', n)
                    k -= n
                else:
                    st = st.replace(alphabet[i], '', k)
                    k -= k
                if k <= 0:
                    break
    return st

# codewars


def solve2(st, k):
    for i in sorted(st)[:k]:
        st = st.replace(i, '', 1)
    return st


def solve3(st, k):
    for i in "abcdefghijklmnopqrstuvwxyz":
        n = st.count(i)
        st = st.replace(i, "", k)
        k -= n

        if k < 1:
            break

    return st


def solve4(st, k):
    cnt = Counter(st)
    for i in sorted(cnt):
        n = min(cnt[i], k)
        st = st.replace(i, '', n)
        k -= n
    return st


my_stroka = solve4("abrakadabra", 8)

print(my_stroka)
