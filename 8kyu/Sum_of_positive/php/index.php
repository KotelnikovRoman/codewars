<?php

// my code
function positive_sum($arr) {
    $num = 0;
    for ($i = 0; $i < count($arr); $i++) {
        if($arr[$i] > 0) {
            $num += $arr[$i];
        }
    }
    return $num;
}

//codewars
function positive_sum2($arr) {
    return array_sum(array_filter($arr, function ($n) {return $n > 0;}));
}

function positive_sum3($arr) {
    $sum = 0;

    foreach($arr as $element) {
        $sum += $element > 0 ? $element : 0;
    }

    return $sum;
}

function positive_sum4($arr) {
    return array_reduce(
        $arr,
        function ($c, $i) {
            if ($i > 0) {
                $c += $i;
            }
            return $c;
        },
    0);
}

function positive_sum5($arr) {
    $sum = 0;

    foreach ($arr as $num) {
        switch ($num) {
            case $num < 0:
                break;
            case $num > 0:
                $sum += $num;
        }
    }

    return $sum;
}

function positive_sum6($arr) {
    $total = 0;

    foreach($arr as $num) {
        if ($num > 0) $total += $num;
    }

    return $total;
}

$arr = [2, 3, 5, -7, 10, 0];

echo positive_sum6($arr);

?>