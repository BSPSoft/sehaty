<?php
 session_start();

 
 
 $con=new mysqli('localhost','root','','sehatydb') or die('Connection failed'.mysqli_error($con));
 $con->set_charset('utf8');


?>