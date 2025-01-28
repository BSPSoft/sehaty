<?php
 require_once '../cors.php';
 require_once '../connectDB.php';

 $data = json_decode(file_get_contents('php://input'), true);

$emailOld=$data['emailOld'];
$emailNew=$data['emailNew'];

if (empty($emailOld) || empty($emailNew) ):
    echo json_encode(['status'=>false,'result'=>'email is empty']);
    exit;
endif;



$sql=mysqli_query($con,"UPDATE `users` SET `email`='$emailNew' WHERE `email`='$emailOld'");
    if($sql):
      $status=true;
    else:
      $status=false;
    endif;

    header('Content-Type:application/json');
       if($status===true):
        echo json_encode(['status'=>$status,'result'=>'successflly ...']);
       else:
        echo json_encode(['status'=>$status,'result'=>'not changed of email']);
       endif;

?>