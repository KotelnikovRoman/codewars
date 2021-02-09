<?php
//my code
function is_divisible($n, $x, $y) {
    return $n % $x == 0 && $n % $y == 0 ? true : false;
}

//codewars
function is_divisible2(int $n, int $x, int $y): bool {
    return $n % $x == 0 && $n % $y == 0;
}

function is_divisible3(int $n, int $x, int $y): bool {
    return !($n % $x || $n % $y);
}

function is_divisible4($n, $x, $y) {
    return !($n % $x) and !($n % $y);
}

function is_divisible5($n, $x, $y) {
    return $n % $x + $n % $y == 0;
}

$numbers = is_divisible5(50, 5, 7);

echo "boolean: $numbers";

?>