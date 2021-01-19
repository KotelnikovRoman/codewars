//my code
function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0;
    }
    return n * m;
}

function paperwork5(n, m) {
    return Math.floor(Math.max(0, n) * Math.max(0, m));
}

//codewars
function paperwork2(n, m) {
    /**
     * вернуть n * m если условие верно
     * иначе 0
     */
    return n > 0 && m > 0 ? n * m : 0;
}

const paperwork3 = (n, m) => Math.max(0, n) * Math.max(0, m);

paperwork4 = (n, m) => n < 0 || m < 0 ? 0 : n * m;

var itog = paperwork5(5, 5);

document.write(itog);