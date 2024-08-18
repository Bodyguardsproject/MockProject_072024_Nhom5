<?php

    $server = 'localhost';
    $user = 'root';
    $pass = '';
    $database = 'tbl_feedback_service_sg';

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
