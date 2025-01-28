import { useEffect, useState } from "react";
import Swal from "sweetalert2";
// import mp4


function Vecation() {

  const [vecation ,setVecation]=useState({
    name:'',
    idNational:'',
    nationality:'',
    employer:'',
    namePhysician:'',
    position:'',
    duration:'',
    dateAdmission:'',
    dateDischarge:'',
    dateLssue:new Date().toISOString().split('T')[0],
    idVecation:'',
    option:'insert'
  });

  const [startDate,setStartDate]=useState('');
  const [Duration,setDuration]=useState('');
 

  // جلب البيانات على حسب تغير هذا المتحكم
  const [trigger,setTrigger]=useState(0);


  // calc value date end
  const calculatorEndDat=(startD,duration)=>{
    if(!startD || duration <=0){
      return;
    }

    var start=new Date(startD);
    start.setDate(start.getDate() + parseInt(duration));
    var dateFormat=start.toISOString().split('T')[0]

    setVecation({...vecation,
      duration:duration,
      dateAdmission:startD,
      dateDischarge:dateFormat});

  }
  // ------ //



  return (
    <div className="vecation">
      <div className="alert-note">
       <h3 style={{color:'#004080'}}>قطع الإجازة المرضية</h3>
      </div>

      <form 
          className="form frmVecation"
          onSubmit={(e)=>{
            e.preventDefault();
            fetch('http://localhost:82/seha/server/fetch/actions/vecation.php',{
              method:'POST',
              headers:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify(vecation),
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data);
              if(data.status===false){
                Swal.fire(
                  'خطأ',
                   data.result,
                   'warning',
                   )
               } else{
                  Swal.fire(
                      data.title,
                      data.result,
                      'success',
                  )
               } 
            })
            .catch(err=>{
              Swal.fire(
                'خطأ///',
                 err.message,
                 'warning',
                 )
              console.log(err);
             })
             .finally(()=>{
              // جلب البيانات على حسب تغير هذا المتحكم
              setTrigger(trigger+1);
             });
           }
         }
          >
         <div className="form-row">
           
           {/* name */}
           <div className="form-group"> 
              <input 
                  type="text" 
                  value={vecation.name}
                  onChange={(e)=>{
                    setVecation({...vecation,name:e.target.value})
                  }} 
                  required />
              <label htmlFor="name">الاسم الكامل</label>          
           </div>

            {/* idNational  */}
           <div className="form-group"> 
              <input 
                  type="number"
                  value={vecation.idNational}
                  onChange={(e)=>{
                    setVecation({...vecation,idNational:e.target.value});
                  }}
                   required />
              <label htmlFor="numberCard">رقم الهوية / الإقامة</label>          
           </div>

            {/* nationality */}
           <div className="form-group"> 
              <input 
                  type="text" 
                  value={vecation.nationality}
                  onChange={(e)=>{
                    setVecation({...vecation,nationality:e.target.value});
                  }} 
                  required />
              <label htmlFor="nationality">الجنسية</label>          
           </div>

            {/* employer */}
           <div className="form-group"> 
              <input 
                  type="text" 
                  value={vecation.employer}
                  onChange={(e)=>{
                    setVecation({...vecation,employer:e.target.value});
                  }} 
                  required />
              <label htmlFor="business">جهة العمل</label>          
           </div>

            {/* namePhysician */}
           <div className="form-group"> 
              <input 
                  type="text" 
                  value={vecation.namePhysician}
                  onChange={(e)=>{
                    setVecation({...vecation,namePhysician:e.target.value});
                  }} 
                  required />
              <label htmlFor="doctorName">اسم الطبيب المعالج</label>          
           </div>

            {/* position */}
           <div className="form-group"> 
              <input 
                  type="text" 
                  value={vecation.position}
                  onChange={(e)=>{
                    setVecation({...vecation,position:e.target.value});
                  }} 
                  required />
              <label htmlFor="jopTitle">المسمى الوظيفي</label>          
           </div>


           <hr style={{color:"#fff",width:"100%"}} />

            {/* duration */}
           <div className="form-group" > 
              <input 
                  type="number"
                  value={Duration}
                  onChange={(e)=>{
                    
                    setDuration(e.target.value);                    
                    calculatorEndDat(startDate,e.target.value);
                    
                  }}
                   required 
                   max={30} min={1}
                    style={{width:"100%"}} />
              <span htmlFor="vectionPeriod" style={{color:"#fff"}}>مدة الإجازة</span>   
           </div>

            {/* date start -- dateAdmission */}
           <div className="form-group" > 
              <input 
                  type="date" 
                  value={startDate}
                  onChange={(e)=>{
                    setStartDate(e.target.value);
                    if(Duration==='')  return;
                    calculatorEndDat(e.target.value,Duration);
                  }} 
                  required style={{width:"100%"}} />
              <span htmlFor="vectionPeriod" style={{color:"#fff"}}>تاريخ الدخول</span>   
           </div>

         </div>

         <hr style={{color:"#fff",width:"100%"}} />
         <div className="form-group">
           <button type="submit">حفظ</button>
           <button type="reset" onClick={()=>{
            setVecation({...Vecation,
              name:'',
              idNational:'',
              nationality:'',
              employer:'',
              namePhysician:'',
              position:'',
              duration:'',
              dateAdmission:'',
              dateDischarge:'',
              dateLssue:new Date().toISOString().split('T')[0],
              idVecation:'',
              option:'insert'
           })
           setDuration('');
           setStartDate('');
           }}>جديد</button>
         </div>
        
        <br /><br />
       
      </form>
      <div style={{clear:"both"}}></div>
      <TableVections  
                    trigger={trigger}
                    setTrigger={setTrigger} 
                    vecation={vecation} 
                    setVecation={setVecation} 
                    setDuration={setDuration} 
                    setStartDate={setStartDate}/>
   </div>
  )
}

export default Vecation;



export function TableVections({trigger,setTrigger,vecation,setVecation,setDuration,setStartDate}){

  const [getVecation,setGetVecation]=useState('');


  useEffect(()=>{
    const fetchVection=async()=>{
       fetch('http://localhost:82/seha/server/fetch/getVecation.php')
       .then(res=>res.json())
            .then(data=>{
              console.log(data);
              if(data.status===false){
                setGetVecation('');
              } else{
                setGetVecation(data.result);
              }
              
            })
            .catch(err=>{
              setGetVecation('');


              console.log(err);
             });  
         }

         fetchVection();

  },[trigger])



  // fetch delete
  const fetchDelete=(id_Vecation)=>{
    fetch('http://localhost:82/seha/server/fetch/actions/deleteVecation.php',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({'idVecation':id_Vecation})
    })
    .then(res=>res.json())
         .then(data=>{
           console.log(data);
            if(data.status===false){
                Swal.fire(
                  'خطأ',
                  data.result,
                  'warning',
              )
           } else{
               Swal.fire(
                  'تم الحذف',
                  data.result,
                  'success',
               )
           } 
         })
         .catch(err=>{
                Swal.fire(
                  'خطأ',
                  err.message,
                  'warning',
              );
              console.log(err);
          })
          .finally(()=>{
            // جلب البيانات على حسب تغير هذا المتحكم
            setTrigger(trigger+1);
           });
  }

  // generatePDF
  const generatePDF=()=>{
    let html='';
      html+='<p>ملف pdf <br> يحوي تقرير الإجازة المرضية</p>';
      html+='<a href="http://">تحميل الملف</a>';

   Swal.fire({
    titleText:"تم انشاء ملف pdf",
    html:html,
   })
  }

  return(
  <div className="table-container">
     <div className="alert-note">
       <h3>الإجازات المقطوعة</h3>
     </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>رمز الخدمة</th>
              <th>رقم الهوية/الإقامة</th>
              <th>الاسم</th>
              <th>الجنسية</th>
              <th>مدة الإجازة</th>
              <th>تاريخ التسجيل</th>
              <th>تاريخ الانتهاء</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {getVecation===''?(
               <>
                <div style={{
                  margin:'5px auto',
                  padding:'15px',
                  position:'absolute',
                  width:'70%',
                  fontSize:'18px',
                  fontWeight:'bold',
                  backgroundColor:'#f9f9f9'
                }}>The table is empty of data ...!</div>
                <br/>
                <br/>
                <br/>
               </>
            ):(
              <>
            {getVecation &&  getVecation.map((ele,index)=>{
              return(
                <tr key={index}>
                  <td>{(index+1)}</td>
                  <td>{ele.id_Vecation}</td>
                  <td>{ele.id_National}</td>
                  <td>{ele.name}</td>
                  <td>{ele.nationality}</td>
                  <td>{ele.duration}</td>
                  <td>{ele.date_Admission}</td>
                  <td>{ele.date_Discharge}</td>
                  <td>
                    <button 
                      className="btn_edit"
                      onClick={(e)=>{
                        // filter data
                        const thisVecation=getVecation.filter((v)=> v.id_Vecation===ele.id_Vecation);
                        console.log(thisVecation)
                        setVecation({
                          ...vecation,
                          name:thisVecation[0].name,
                          idNational:thisVecation[0].id_National,
                          nationality:thisVecation[0].nationality,
                          employer:thisVecation[0].employer,
                          namePhysician:thisVecation[0].name_Physician,
                          position:thisVecation[0].position,
                          duration:thisVecation[0].duration,
                          dateAdmission:thisVecation[0].date_Admission,
                          dateDischarge:thisVecation[0].date_Discharge,
                          dateLssue:thisVecation[0].date_Lssue,
                          idVecation:thisVecation[0].id_Vecation,
                          option:'update'
                        });
                        setDuration(thisVecation[0].duration);
                        setStartDate(thisVecation[0].date_Admission);
                      }}
                      >Edit</button>
                  </td>

                  <td>
                    <button style={{
                      backgroundColor:"red",
                      color:"white"
                      ,padding:"10px 3px"
                      ,fontSize:"12px"
                      }}
                      onClick={(e)=>{
                          Swal.fire({
                            title:'هل تريد الحذف',
                            text:'تأكيد حذف البيانات',
                            icon:'warning',
                            showCancelButton:true,
                            confirmButtonText:'نعم',
                            cancelButtonText:'إلغاء',
                            confirmButtonColor:'#d33',
                            cancelButtonColor:'#3085d6',  
                                                
                          })
                          .then(result=>{
                            if(result.isConfirmed){
                              fetchDelete(ele.id_Vecation);
                            }
                          })
                        
                      }}
                      >delete</button>
                  </td>

                  <td>
                    <button style={{
                      backgroundColor:"orange",
                      color:"white"
                      ,padding:"10px 3px"
                      ,fontSize:"12px"
                      }}
                      onClick={(e)=>{
                        generatePDF();
                      }}
                      >pdf</button>
                  </td>
                </tr>
              );
            })} 

              </>
            )
              }
           
          </tbody>
        </table>
        <br/>
        <br/>
        <br/>
    </div>
  );
}