<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<button onclick="fetchLogin()">fetch</button>
<button onclick="mpdf(5,1,100)">generateUniqueRandomNumbers</button>
    <script>
         const fetchLogin=async()=>{
      fetch('fetch/login.php',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email:'admin1122@gmail.com',password:'1qa2ws3ed'}),
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
      })
      .catch($err=>console.log($err));
   }

 
   </script>
</body>
</html>