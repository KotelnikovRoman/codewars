def solution(st, limit):
    if len(st) <= limit:
        return st
    return st[0:limit] + "..."
