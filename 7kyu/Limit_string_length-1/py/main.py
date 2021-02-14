# my code
def solution(st, limit):
    if len(st) <= limit:
        return st
    return st[0:limit] + "..."

# codewars


def solution2(st, limit):
    return st[:limit] + '...' if limit < len(st) else st


def solution3(st, limit):
    return f'{st[:limit]}{"..." * (len(st) > limit)}'


def solution4(st, limit):
    return st if len(st) <= limit else "".join(list(st)[:limit]) + "..."


def solution5(st, limit):
    return st[:limit] + '...' * (limit < len(st))


print(solution4("my code prosto super", 7))
