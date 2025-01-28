import { useState } from "react";

function Login({setIsAdmin}) {
  const [frmLogin,setFrmLogin]=useState({
    email:'',
    password:''
   });
   const [Data,setData]=useState({
    status:true,
    result:''
 });
  
   const fetchLogin=async()=>{
      fetch('http://localhost:82/seha/server/fetch/login.php',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(frmLogin),
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        setData({...Data,status:data.status,result:data.result});

        if(data.status===true){
          setIsAdmin(true) 
        }
      })
      .catch(err=>{
        console.log(err)
        setData({...Data,status:false,result:err.message});

      });
   }
  return (
    <>
   <div className='container'>
     <main>
            <h2>تسجيل الدخول</h2>
            <form 
                method="POST" 
                className="login-form"
                onSubmit={(e)=>e.preventDefault()}
                >
                <label htmlFor="username">اسم المستخدم أو البريد الإلكتروني</label>
                <input 
                  type="text" 
                  value={frmLogin.email}
                  onChange={(e)=>{
                    setFrmLogin({...frmLogin,email:e.target.value});
                  }}
                  id="username" 
                  name="username" 
                  placeholder="أدخل اسم المستخدم أو البريد الإلكتروني" 
                  required />

                <label htmlFor="password">كلمة المرور</label>
                <input 
                  type="password" 
                  value={frmLogin.password}
                  onChange={(e)=>{
                    setFrmLogin({...frmLogin,password:e.target.value});
                  }}
                  id="password" 
                  name="password" 
                  placeholder="أدخل كلمة المرور" 
                  required />
                <br />
                <button 
                   type="submit" 
                   onClick={()=>fetchLogin()}
                   className="btn-login"
                   >
                    تسجيل الدخول
                </button>
            </form>

          {Data.status===false ?(
            <div className="alert-danger">
            {Data.result}
          </div>
          ):null}
         
          
     </main>
    
   </div>
    <footer>
            <p>© 2025 منصة صحتي جميع الحقوق محفوظة.</p>
   </footer>
   </>
  )
}

export default Login;