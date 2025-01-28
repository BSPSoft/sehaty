<?php
include_once  '../cors.php';
include_once  '../connectDB.php';


$sql=mysqli_query($con,'SELECT * FROM `vecation`');

$data=[];
if($sql):
    if(mysqli_num_rows($sql)>0):
        $status=true;
        while($row=mysqli_fetch_assoc($sql)):
            $data[]=$row;
        endwhile;
    endif;
else:
    $status=false;
endif;

    header('Content-Type:application/json');
    if($status===true):
    echo json_encode(['status'=>$status,'result'=>$data]);
    else:
    echo json_encode(['status'=>$status,'result'=>'The table is empty of data ...!']);
    endif;

?>