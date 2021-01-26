//my code
function isDivisible(n, x, y) {
    if ((n % x == 0) && (n % y == 0)) {
        return true;
    }
    return false;
}

//codewars
function isDivisible2(n, x, y) {
    return n % x === 0 && n % y === 0;
}

function isDivisible3(n, x, y) {
    return n % x == 0 && n % y == 0 ? true : false;
}

function isDivisible4(n, x, y) {
    return !(n % x || n % y);
}

const isDivisible5 = (n, x, y) => n % x == 0 && n % y == 0;

function isDivisible6(n, x, y) {
    return (n % x) + (n % y) == 0;
}

function isDivisible7(n, x, y) {
    return [n / x, n / y].every(Number.isInteger);
}

const isDivisible8 = (n, x, y) => n % x + n % y;

var number_bool = isDivisible7(20, 5, 4);

document.write(number_bool);