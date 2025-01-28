<?php
 require_once '../cors.php';
 require_once '../connectDB.php';

 $data = json_decode(file_get_contents('php://input'), true);

$email=$data['email'];

if (empty($email)):
    echo json_encode(['status'=>false,'result'=>'email is empty']);
    exit;
endif;



$sql=mysqli_query($con,"SELECT `email` FROM `users` WHERE `email`='$email'");
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
        echo json_encode(['status'=>$status,'result'=>'email is incorrect']);
       endif;

?>