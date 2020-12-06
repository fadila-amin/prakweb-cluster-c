<?php
$randat = ["lanirne","aduh","qifuat","toda","anevi","samid","kifuat","kopit","upin","ipun"];
echo "belum diurutkan";
echo "<pre>";
echo print_r($randat,true);
echo "</pre>";

sort($randat);

echo "sudah di urutkan";
echo "<pre>";
echo print_r($randat,true);
echo "</pre>";
?>