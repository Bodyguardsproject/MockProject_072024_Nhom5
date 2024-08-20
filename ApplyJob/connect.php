<?php

    $server = 'localhost';
    $user = 'root';
    $pass = '';
    $database = 'tbl_apply';

    $conn = new mysqLi($server, $user, $pass, $database);

    if($conn)
    {
        mysqLi_query($conn, "SET NAMES 'utf8' ");
    }
    else
    {
        echo 'Kết nối database thất bại';
    }
?>
