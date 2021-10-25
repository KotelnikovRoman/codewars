function digitize(n) {
    let n_str = String(n);
    let arr = [];
    for(let i = n_str.length - 1; i >= 0; i--) {
        arr.push(parseInt(n_str[i]));
    }
    return arr;
}

function digitize2(n) {
    return String(n).split('').map(Number).reverse();
}

function digitize3(n) {
    return Array.from(String(n), Number).reverse();
}

const digitize4 = n => {
    return n.toString().split("").reverse().map(Number);
}

const digitize5 = n => [...String(n)].map(Number).reverse();

document.write(digitize5(39725));