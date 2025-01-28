import About from "./About";
import More from "./More";
import Vecation from "./Vecation";
import { useState } from "react";

function Footer(props) {
    const [index,setIndex]=useState(0);
    const pages=[
        <Vecation />,
        <More />,
        <About />
       ]

    
  return (
    <div className="menuTap">
        <h2>
            <span onClick={()=>{
                props.setPage(pages[0]);
                setIndex(0);
                }} className={index===0?'active':''+' items'}>الإجازات</span>
        </h2>
        <h2>
            <span onClick={()=>{
                props.setPage(pages[1]);
                setIndex(1);
                   }} className={index===1?'active':''+' items'}>المزيد</span>
        </h2>
        <h2>
           <span onClick={()=>{
            props.setPage(pages[2]);
            setIndex(2);
            }} className={index===2?'active':''+' items'}>حول</span>
        </h2>
    </div>
  )
}

export default Footer