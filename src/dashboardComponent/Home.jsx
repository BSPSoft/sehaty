import Header from "../queryComponent/Header";
import Footer from "./Footer"
import Vecation from "./Vecation"
import './style.css';
import { useState } from "react";

function Home() {
  const [page,setPage]=useState(<Vecation/>)

  return (
    <div>
      <Header />
      {page}
      <Footer page={page} setPage={setPage}/>
    </div>
  )
}

export default Home