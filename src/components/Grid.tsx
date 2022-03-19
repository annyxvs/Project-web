import  Img1 from './image/img10.jpg'
import Img2 from './image/img11.jpg'
import './css/principal.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'


const Grid = () =>{

  return(
    <>
    <div id="conteiner">

        <div className="text">
            <p className='text-princ'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cumque laboriosam rem quas nemo eveniet amet minus dolor consequuntur </p>
            <p className='text-sec'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab doloribus, eius quis, rem consectetur.</p>
            <button>Start now</button>
        </div>

       <div className="imgs">
            <div id="img-1"> 
               <img className='img-1' src={Img2} alt="imagem " />
            </div>
            <AiOutlineShoppingCart className='icon-cart'/>
            <div id="img-2"> 
                <img className='img-2' src={Img1} alt="imagem " />
            </div>
       </div>
    </div>
    </>
  )
}

export default Grid;