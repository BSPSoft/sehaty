import './dist/login.css';
import Home from './dashboardComponent/Home'
import { useState } from 'react';
import Login from './dashboardComponent/Login';


function Dashboard() {
   const [isAdmin,setIsAdmin]=useState(false);
   


  return (
    <div>
      {isAdmin===false ?(
         <Login setIsAdmin={setIsAdmin} /> 
      ):(
        <Home />
      )}
      
    </div>
  )
}

export default Dashboard;