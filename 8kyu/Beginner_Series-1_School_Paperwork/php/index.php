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

$number = paperwork2(3, 2);

echo $number;

?>