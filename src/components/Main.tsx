import Header from "./Header";
import './css/main.css'
import Grid from "./Grid";
import { AiFillCaretUp } from "react-icons/ai";
import { useState } from "react";


const Main = () =>{

  return(
      <div id="main">   
        <Header/>
        <Grid/>     
      </div>
  )
}

export default Main;