def update_light(current):
    colors = [
        "green",
        "yellow",
        "red"
    ]
    for i in range(len(colors)):
        if current == colors[2]:
            return colors[0]
        if current == colors[i]:
            return colors[i+1]

#codewars
def update_light2(current):
    return {"green":"yellow", "yellow":"red", "red":"green"}[current]

update_light3 = {
    "green": "yellow", 
    "yellow": "red", 
    "red": "green"
}

print(update_light3["red"])