<?php

 header('Access-Control-Allow-Origin','*');
 header('Access-Control-Allow-Headers','*');
 header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,PATCH');

 if($_SERVER['REQUEST_METHOD']==='OPTIONS'){
    http_response_code(200);
    exit;
 }

?>