<?php
include_once  '../../cors.php';
include_once  '../../connectDB.php';

$data = json_decode(file_get_contents('php://input'), true);

$idVecation=$data['idVecation'];

if(empty($idVecation)):
    echo json_encode(['status'=>false,'result'=>'It made a erorr in choosing the item...!']);
    exit;
endif;

$sql=mysqli_query($con,"DELETE FROM `vecation` WHERE `id_Vecation`='$idVecation'");

    if($sql):
    $status=true;
    else:
    $status=false;
    endif;

    header('Content-Type:application/json');
    if($status===true):
     echo json_encode(['status'=>$status,'result'=>'تم حذف العنصر بنجاح']);
    else:
     echo json_encode(['status'=>$status,'result'=>'حدث خطأ في عملية الحذف!']);
    endif;
?>