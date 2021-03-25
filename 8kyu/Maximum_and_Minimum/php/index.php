<?php

//my code
function maximum($array) {
    $max = $array[0];
    for($i = 0; $i < count($array); $i++) {
        if ($max < $array[$i]) {
            $max = $array[$i];
        }
    }
    return $max;
}

function minimum($array) {
    $min = $array[0];
    for($i = 0; $i < count($array); $i++) {
        if($min > $array[$i]) {
            $min = $array[$i];
        }
    }
    return $min;
}

//codewars
function maximum2($array) {
    return max($array);
}

function minimum2($array) {
    return min($array);
}

use function max as maximum3;
use function min as minimum3;

function maximum4($array) {
    $max = count($array);
    sort($array);
    return $array[$max-1];
}

function minimum4($array) {
    sort($array);
    return $array[0];
}

function maximum5($array) {
    rsort($array, SORT_NUMERIC);
    return $array[0];
}

function minimum5($array) {
    sort($array, SORT_NUMERIC);
    return $array[0];
}

function maximum6($array) {
    $max = $array[0];
    foreach($array as $item) {
        if($item > $max) {
            $max = $item;
        }
    }
    return $max;
}

function minimum6($array) {
    $min = $array[0];
    foreach ($array as $item) {
        if ($item < $min) {
            $min = $item;
        }
    }
    return $min;
}

echo maximum6([2, 3, 5, 99, 1, 7, 0]);
echo "<br>";
echo minimum6([5, 10, 1, 3, 7]);

?>