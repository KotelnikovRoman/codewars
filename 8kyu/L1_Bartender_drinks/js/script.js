function getDrinkByProfession(param) {
    let new_param = "";
    let arr = param.split(" ");
    for(let i = 0; i < arr.length; i++) {
        new_param += arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
        if(i < arr.length - 1) new_param += " ";
    }
    switch(new_param) {
        case "Jabroni":
            return "Patron Tequila";
        case "School Counselor":
            return "Anything with Alcohol";
        case "Programmer":
            return "Hipster Craft Beer";
        case "Bike Gang Member":
            return "Moonshine";
        case "Politician":
            return "Your tax dollars";
        case "Rapper":
            return "Cristal";
        default:
            return "Beer";
    }
}

const drinks = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal"
}

const getDrinkByProfession2 = profession => drinks[profession.toLowerCase()] || "Beer";

function getDrinkByProfession3(param) {
    let map = new Map([
        ["jabroni", "Patron Tequila"],
        ["school counselor", "Anything with Alcohol"],
        ["programmer", "Hipster Craft Beer"],
        ["bike gang member", "Moonshine"],
        ["politician", "Your tax dollars"],
        ["rapper", "Cristal"]
    ]);

    let normal = param.toLowerCase();
    return map.has(normal) ? map.get(normal) : "Beer";
}

text = getDrinkByProfession3("jaBRoni");
document.write(text);