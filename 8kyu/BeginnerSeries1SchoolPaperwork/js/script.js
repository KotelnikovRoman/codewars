//my code
function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0;
    }
    return n * m;
}

//codewars
function paperwork(n, m) {
    /**
     * вернуть n * m если условие верно
     * иначе 0
     */
    return n > 0 && m > 0 ? n * m : 0;
}

itog = paperwork(-2, 3);

document.write(itog);