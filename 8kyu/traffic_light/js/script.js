function updateLight(current) {
    let colors = ['green', 'yellow', 'red'];
    if(current == colors[0]) {
        return colors[1];
    }
    else if(current == colors[1]) {
        return colors[2];
    }
    else {
        return colors[0];
    }
}

//codewars
function updateLight2(current) {
    return current == 'yellow' ? 'red' : current == 'green' ? 'yellow' : 'green';
}

const updateLight3 = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
})[current];

function updateLight4(current) {
    switch(current) {
        case 'green':
            return 'yellow';
        case 'yellow':
            return 'red';
        default:
            return 'green';
    }
}

const updateLight5 = (
    c,obj = {
        green:'yellow',
        yellow:'red',
        red:'green'
    }
)=>obj[c];