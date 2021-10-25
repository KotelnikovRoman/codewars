function makeNegative(num) {
    if(num > 0) {
        return num - num * 2;
    }
    else if(num < 0) {
        return num;
    }
    else {
        return 0;
    }
}

//codewars
function makeNegative2(num) {
    return -Math.abs(num);
}

function makeNegative3(num) {
    return num < 0 ? num : -num;
}

makeNegative4 = n => -Math.abs(n);

let number = makeNegative4(0.3);

document.write(number);