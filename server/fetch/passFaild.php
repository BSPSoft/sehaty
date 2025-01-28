<?php
 require_once '../cors.php';
 require_once '../connectDB.php';

 $data = json_decode(file_get_contents('php://input'), true);

$pass=$data['pass'];

if (empty($pass)):
    echo json_encode(['status'=>false,'result'=>'password is empty']);
    exit;
endif;



$sql=mysqli_query($con,"SELECT `password` FROM `users` WHERE `password`='$pass'");
    if($sql):
        if(mysqli_num_rows($sql)>0):
          $row=mysqli_fetch_row($sql);
          $status=true;
        else:
            $status=false;
        endif;
    endif;

    header('Content-Type:application/json');
       if($status===true):
        echo json_encode(['status'=>$status,'result'=>$row[0]]);
       else:
        echo json_encode(['status'=>$status,'result'=>'password is incorrect']);
       endif;

?>