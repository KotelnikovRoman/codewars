<?php

function multiTable($number) : string {
    $table = "";
    for($i = 1; $i <= 10; $i++) {
        $table .= "$i * $number = ".$i*$number;
        $table .= $i < 10 ? "<br>" : "";
    }
    return $table;
}

echo multiTable(7);