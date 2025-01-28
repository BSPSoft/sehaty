<?php
 include_once '../cors.php';
 include_once '../connectDB.php';

$data = json_decode(file_get_contents('php://input'), true);

$email=$data['email'];
$password=$data['password'];

if (empty($email) || empty($password)):
    echo json_encode(['status'=>false,'result'=>'email and password is empty']);
    exit;
endif;



$sql=mysqli_query($con,"SELECT * FROM `users` WHERE `email`='$email' AND `password`='$password'");
    if($sql):
        if(mysqli_num_rows($sql)>0):
          $row=mysqli_fetch_row($sql);
          $status=true;
          $_SESSION['admin']=$row[1];
        else:
            $status=false;
        endif;
    endif;

    header('Content-Type:application/json');
    if($status===true):
       echo json_encode(['status'=>$status,'result'=>$_SESSION['admin']]);
    else:
       echo json_encode(['status'=>$status,'result'=>'email or password incorrect ...']);
    endif;

?>