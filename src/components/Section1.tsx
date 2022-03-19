import React from "react";
import { ReactDOM } from "react";
import './css/section1.css'
import Img3 from './image/img3.jpg'
import Img4 from './image/img4.jpg'
import Img5 from './image/img5.jpg'


const Section1 = () =>{


 return(

  <div className="section">
    <div className="img1">
      <img src={Img3} />
      <h1>All need to start</h1>
      <p>Add plugin to any site and set up a new store in minutes.Ecommerce for WebCommerce.</p>
    </div>
    <div className="img1">
      <img src={Img4} />
      <h1>Customize and Exted</h1>
      <p>From subcripition to gym classes to luxury cars, is fully costomizable.</p>
    </div>
    <div className="img1">
      <img src={Img5} />
      <h1>Active Community</h1>
      <p>WebCommerce is one the fastest-growing eCommerce communities.</p>
    </div>

  </div>

 )
}

export default Section1;