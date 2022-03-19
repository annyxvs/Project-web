import { AiFillForward } from 'react-icons/ai';
import './css/slide.css'
import Slider1 from './image/slider1.jpg'
import Slider2 from './image/slider2.jpg'
import Slider3 from './image/slider3.jpg'
import { useState } from 'react';

const Slide = () =>{

  const [image, changeImage] = useState(1)

  const change = () =>{
      if(image < 3){
        changeImage(image + 1)
      }else if(image == 3){
        changeImage(1)
      }
  } 


  return(
    <div className="slide">

      <div className="slide-images">
        <img src={Slider1} alt='' className={image ==  1 ? 'show' : 'vanish'} />
        <img src={Slider2} alt='' className={image ==  2 ? 'show' : 'vanish'} />
        <img src={Slider3} alt='' className={image ==  3 ? 'show' : 'vanish'} />
        <button className='bnt-next' onClick={change}><AiFillForward/></button>
      </div>
      
    </div>
  )
}

export default Slide;