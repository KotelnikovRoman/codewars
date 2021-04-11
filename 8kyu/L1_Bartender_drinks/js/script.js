function getDrinkByProfession(param){
    drinks = [
        "Patron Tequila",
        "Anything with Alcohol",
        "Hipster Craft Beer",
        "Moonshine",
        "Your tax dollars",
        "Cristal",
        "Beer"
    ]

    if (param.toLowerCase() == "jabroni") {
        return drinks[0];
    }
    if (param.toLowerCase() == "school counselor") {
        return drinks[1];
    }
    if (param.toLowerCase() == "programmer") {
        return drinks[2];
    }
    if (param.toLowerCase() == "bike gang member") {
        return drinks[3];
    }
    if (param.toLowerCase() == "politician") {
        return drinks[4];
    }
    if (param.toLowerCase() == "rapper") {
        return drinks[5];
    }
    else {return drinks[6];}
}

//codewars
function getDrinkByProfession(param) {
    param = param.toLowerCase();

    switch(param) {
        case "jabroni": return "Patron Tequila";
        case "school counselor": return "Anything with Alcohol";
        case "programmer": return "Hipster Craft Beer";
        case "bike gang member": return "Moonshine";
        case "politican": return "Your tax dollars";
        case "rapper": return "Cristal";
        default: return "Beer";
    }
}