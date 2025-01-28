<?php
 require_once __DIR__.'/vendor/autoload.php';
 use \mp
 $mpdf=new  \Mpdf(['default_font'=>'dejavusans']);

 $mpdf->WriteHTML('<h1>hello Basheer</h1>');

 $mpdf->Output('myfile.pdf','I');


?>