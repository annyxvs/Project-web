import Img8 from './image/img8.png'
import './css/section2.css'

const Section2 = () =>{
  return(
    <>
      <div className="section2">
        <div className="esq">
          <h1>About us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolorem necessitatibus molestiae natus error temporibus autem eaque excepturi, delectus facere inventore optio labore? Dolorem hic esse cumque cupiditate quasi officiis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia ipsam consectetur accusamus architecto, iusto sit deleniti quis facilis, sapiente enim praesentium cum, officia voluptas! Provident alias quas expedita facere.</p>
          <button className='bnt-start'>Get start</button>
        </div>
        <div className="dir">
          <img src={Img8} className="img-dir" />
        </div>
      </div>
    </>
  )
}

export default Section2;