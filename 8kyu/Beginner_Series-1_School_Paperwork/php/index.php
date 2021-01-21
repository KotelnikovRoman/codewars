<?php

//my code
function paperwork(int $n, int $m) {
    return $n < 0 || $m < 0 ? 0 : $n * $m;
}

//codewars
function paperwork2(int $n, int $m): int {
    return max(0, $n) * max(0, $m);
}

function paperwork3(int $n, int $m): int {
    return ($n < 0 or $m < 0) ? 0 : $n * $m;
}

/** на мой взгляд код излишен */
function paperwork4(int $n, int $m): int {
    if ($n < 0 || $m < 0 || !is_numeric($n) || !is_numeric($m)) {
        return 0;
    }
    return $n * $m;
}

function paperwork5(int $n, int $m): int {
    if(min($n, $m) <= 0) {
        return 0;
    }
    return $n * $m;
}


$number = paperwork5(2, 10);

echo $number;

?>