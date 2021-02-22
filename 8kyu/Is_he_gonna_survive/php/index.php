<?php
//my code
function hero(int $bullets, int $dragons) {
    return $bullets / 2 >= $dragons;
}

//codewars
function hero2(int $bullets, int $dragons) {
    //$dragons умножить 1 раз на 2
    return $dragons << 1 <= $bullets;
}

echo hero2(15, 3);

?>