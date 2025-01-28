<?php
 require_once '../cors.php';
 require_once '../connectDB.php';

 $data = json_decode(file_get_contents('php://input'), true);

$passOld=$data['passOld'];
$passNew=$data['passNew'];

if (empty($passOld) || empty($passNew) ):
    echo json_encode(['status'=>false,'result'=>'password is empty']);
    exit;
endif;



$sql=mysqli_query($con,"UPDATE `users` SET `password`='$passNew' WHERE `password`='$passOld'");
    if($sql):
      $status=true;
    else:
      $status=false;
    endif;

    header('Content-Type:application/json');
       if($status===true):
        echo json_encode(['status'=>$status,'result'=>'successflly ...']);
       else:
        echo json_encode(['status'=>$status,'result'=>'not changed of password']);
       endif;

?>