function simpleMultiplication(number) {
    if(!(number % 2)) return number * 8;
    return number * 9;
}

//codewars
function simpleMultiplication2(number) {
    return number * (number % 2 ? 9 : 8);
}

function simpleMultiplication3(n) {
    return n % 2 == 0 ? n * 8 : n * 9;
}

const simpleMultiplication4 = (n) => n * (n % 2 ? 9 : 8);

console.log(simpleMultiplication4(1));