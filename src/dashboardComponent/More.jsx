import { useState } from "react";

export default function More() {

  const [emailOld,setEmailOld]=useState('');
  const [emailNew,setEmailNew]=useState('');
  const [passOld,setPassOld]=useState('');
  const [passNew,setPassNew]=useState('');



  return (
    <div>
      <div className="alert-note">
        <h3>تغيير البريد الإلكتروني وكلمة السر</h3>
      </div>
      <EmailOld setEmailOld={setEmailOld}/>
      {emailOld && (
        <>
          <PasswordOld  setPassOld={setPassOld} />

          {passOld && (
              <>
                <hr style={{width:"70%",margin:"10px auto", }} />
                    <EmailNew emailOld={emailOld} emailNew={emailNew} setEmailNew={setEmailNew} />
                    <PasswordNew passOld={passOld} passNew={passNew} setPassNew={setPassNew} />
              </>
            
          )}

        </>
      )}
    
      <br /><br /><br />
    </div>
  )
}
  

export function EmailOld({setEmailOld}){
  const [email,setEmail]=useState('');
  const [error,setError]=useState('');

  return(
    <div>
       <form 
          className="form" 
          style={{margin:'10px auto'}} 
          method="POST" id="formEmail"
          onSubmit={(e)=>{
              e.preventDefault();
              fetch('http://localhost:82/seha/server/fetch/emailFaild.php',{
                      method:'POST',
                      headers:{
                        'Content-Type':'application/json'
                      },
                      body:JSON.stringify({'email':email}),
                    })
                    .then(res=>res.json())
                    .then(data=>{
                      console.log(data);
                      if(data.status===false){
                        setEmailOld('');
                        setError(data.result);
                      } else{
                        setEmailOld(data.result);
                        setError('');

                      }
                      
                    })
                    .catch(err=>{
                      setError(err.message);
                      console.log(err);
                    });
                    }
             }
          >
        <label htmlFor="email" >الايميل السابق:</label>
        <div className="form-group">
          <input 
             type="email" 
             name="email" 
             id="email" 
             value={email}
             onChange={(e)=>{
               setEmail(e.target.value);
             }}
             className="input" 
             style={{direction:"ltr"}}
             placeholder="example@gmail.com" 
             required />
          <button type="submit"  name="checkMail" id="btnCheckMail">فحص</button>
        </div>
       {error}
      </form>
    </div>
  );
}


export function PasswordOld({setPassOld}){
  const [pass,setPass]=useState('');
  const [error,setError]=useState('');
  return(
    <div>
      <form 
          className="form" 
          style={{margin:'10px auto'}} 
          method="POST" 
          id="formPassword"
          onSubmit={(e)=>{
            e.preventDefault();
            fetch('http://localhost:82/seha/server/fetch/passFaild.php',{
                    method:'POST',
                    headers:{
                      'Content-Type':'application/json'
                    },
                    body:JSON.stringify({'pass':pass}),
                  })
                  .then(res=>res.json())
                  .then(data=>{
                    console.log(data);
                    if(data.status===false){
                      setPassOld('');
                      setError(data.result);
                    } else{
                      setPassOld(data.result);
                      setError('');

                    }
                    
                  })
                  .catch(err=>{
                    setError(err.message);
                    console.log(err);
                  });
                  }
           }
          >
        <label htmlFor="currentPass" >كلمة السر السابقة:</label>
         <div className="form-group">
            <input 
               type="password" 
               name="currentPass" 
               id="currentPass"
               value={pass}
               onChange={(e)=>{
                setPass(e.target.value);
               }}  
               className="input" 
               style={{direction:"ltr"}}
               required />
            <button type="submit" name="checkPass" style={{backgroundColor:"red"}}>فحص</button>
           </div>
        {error}
      </form>
    </div>
  );
}


export function EmailNew({emailOld,emailNew,setEmailNew}){
  const [error,setError]=useState('');

  return(
    <div>
      <form 
           className="form" 
           style={{margin:'10px auto'}} 
           method="POST" 
           id="formEmail"
           onSubmit={(e)=>{
            e.preventDefault();
            fetch('http://localhost:82/seha/server/fetch/emailChanged.php',{
                    method:'POST',
                    headers:{
                      'Content-Type':'application/json'
                    },
                    body:JSON.stringify({'emailOld':emailOld,'emailNew':emailNew}),
                  })
                  .then(res=>res.json())
                  .then(data=>{
                    console.log(data);
                    setError(data.result);
                    
                  })
                  .catch(err=>{
                    setError(err.message);
                    console.log(err);
                  });
                  }
           }
           >
        <label htmlFor="email" >تغيير الايميل :</label>
        <div className="form-group">
          <input 
              type="email" 
              name="emailNew" 
              id="emailNew" 
              value={emailNew}
              onChange={(e)=>{
                setEmailNew(e.target.value);
              }}
              className="input" 
              style={{direction:"ltr"}}
              placeholder="example@gmail.com" 
              required />
          <button type="submit"  name="changeMail" id="btnChangekMail">تغيير</button>
        </div>
        {error}
      </form>
    </div>
  );
}


export function PasswordNew({passOld,passNew,setPassNew}){
  const [error,setError]=useState('');

  return(
    <div>
       <form 
           className="form" 
           style={{margin:'10px auto'}} 
           method="POST" 
           id="formPassword"
           onSubmit={(e)=>{
            e.preventDefault();
            fetch('http://localhost:82/seha/server/fetch/passChanged.php',{
                    method:'POST',
                    headers:{
                      'Content-Type':'application/json'
                    },
                    body:JSON.stringify({'passOld':passOld,'passNew':passNew}),
                  })
                  .then(res=>res.json())
                  .then(data=>{
                    console.log(data);
                    setError(data.result);
                    
                  })
                  .catch(err=>{
                    setError(err.message);
                    console.log(err);
                  });
                  }
           }
           >
        <label htmlFor="newPass" >تغيير كلمة السر</label>
         <div className="form-group">
            <input 
                type="password" 
                name="newPass" 
                id="newPass"  
                value={passNew}
                onChange={(e)=>{
                  setPassNew(e.target.value);
                }}
                className="input" 
                style={{direction:"ltr"}}
                required />
            <button type="submit" name="changePass" style={{backgroundColor:"red"}}>تغيير</button>
          </div>
         {error}
      </form>
    </div>
  );
}
