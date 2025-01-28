import { useState } from "react";

function Header(){

    const [menu,setMenu]=useState(false);
    return (
     <div className="header">            
        <div className="dropdown">
            <button className="dropdown-btn" onClick={()=>setMenu(!menu)}>☰</button>
            <div className="logo">
                <img src="./seha_logo.svg" alt="seha" width="80" />
            </div>
        </div>
        {menu===false ? null :(
         <div className="dropdown-menu">
            <ul className="menu">
                <li>
                    <a href="/">الاستعلامات</a>
                </li>
                <li>إنشاء حساب</li>
            </ul> 
            <button className="login-btn">
                <a href="/Dashboard">تسحيل الدخول</a>
            </button>
        </div>
        )}
         
     </div>
    );
}

export default Header;

