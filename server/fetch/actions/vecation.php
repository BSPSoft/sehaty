<?php
include_once  '../../cors.php';
include_once  '../../connectDB.php';

$data = json_decode(file_get_contents('php://input'), true);

$name=$data['name'];
$idNational=$data['idNational'];
$nationality=$data['nationality'];
$employer=$data['employer'];
$namePhysician=$data['namePhysician'];
$position=$data['position'];
$duration=$data['duration'];
$dateAdmission=$data['dateAdmission'];
$dateDischarge=$data['dateDischarge'];
$dateLssue=$data['dateLssue'];
$id_Vecation=$data['idVecation'];

$option=$data['option'];

if(empty($name) || empty($idNational) || empty($nationality) || empty($employer) || empty($dateAdmission)):
  echo json_encode(['status'=>false,'result'=>'The data entered is missing !!!']);
  exit;
endif;



//  option insert
if($option==='insert'):
  
    $idVecation= generateUniqueRandomNumbers(5,0,9);

    $sql=mysqli_query($con,
    "INSERT INTO `vecation`(`id_Vecation`, `name`, `id_National`, `nationality`, `employer`, `name_Physician`, `position`, `duration`, `date_Admission`, `date_Discharge`, `date_Lssue`)
      VALUES ('$idVecation','$name','$idNational','$nationality','$employer','$namePhysician','$position','$duration','$dateAdmission','$dateDischarge','$dateLssue')"
      );


      if($sql):
        $status=true;
      else:
        $status=false;
      endif;

      header('Content-Type:application/json');
          if($status===true):
            echo json_encode(['status'=>$status,'title'=>'إضافة البيانات','result'=> 'تم إضافة البيانات بنجاح']);
          else:
            echo json_encode(['status'=>$status,'title'=>'إضافة البيانات','result'=>'حدث خطأ في عملية الإضافة ...!']);
          endif;
endif;


// option update
if($option==='update'):
  $sql=mysqli_query($con,"UPDATE `vecation` SET 
            `name`='$name',`id_National`='$idNational',
            `nationality`='$nationality',`employer`='$employer',`name_Physician`='$namePhysician',`position`='$position',
            `duration`='$duration',`date_Admission`='$dateAdmission',`date_Discharge`='$dateDischarge',`date_Lssue`='$dateLssue' 
            WHERE `id_Vecation`='$id_Vecation' ");

      if($sql):
        $status=true;
      else:
        $status=false;
      endif;

      header('Content-Type:application/json');
          if($status===true):
            echo json_encode(['status'=>$status,'title'=>'تعديل البيانات','result'=> 'تم تعديل البيانات بنجاح']);
          else:
            echo json_encode(['status'=>$status,'title'=>'تعديل البيانات','result'=>'حدث خطأ في عملية التعديل ...!']);
          endif;;
endif;





//   generateUniqueRandomNumbers
function generateUniqueRandomNumbers($count,$min,$max){
    $numbers=[];
    while(count($numbers) < $count):
       $randomNumber=rand($min,$max);

       // check randomNumber found in numbers array
       // if not found ==> enter of arry
       if(!in_array($randomNumber,$numbers)):
         $numbers[]=$randomNumber;
       endif;
    endwhile;

   return  'PLS'.implode('',$numbers);  
}

?>