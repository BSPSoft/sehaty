<?php
 //  
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

print_r(generateUniqueRandomNumbers(5,1,10)); //'numbers: '.generateUniqueRandomNumbers(5,1,100);
?>