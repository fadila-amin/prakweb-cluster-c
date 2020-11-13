<?php
$count = 0;
$bil = 2;
while ($count < 15) {
    $hasilBagi = 0;
    for ($i = 1; $i <= $bil; $i++) {
        if (($bil % $i) == 0) {
            $hasilBagi++;
        }
    }
    if ($hasilBagi < 3) {
        echo $bil . " , ";
        $count = $count + 1;
    }
    $bil = $bil + 1;
}
