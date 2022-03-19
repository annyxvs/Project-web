import IconName, { AiOutlineSearch } from 'react-icons/ai'
import './css/header.css'


const Header  =() =>{


    return(
      <div id="header">
        <header>
          <div className="logo"> <span> web</span>comerce</div>

          <div className="navigation">
            <nav>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">MarketPlace</a></li>
                <li><a href="#">Most</a></li>
              </ul>
              
            </nav>

          
          </div>

          <div className="bnt-log">
              <button className="bnt-login">
                <a href='#'>Sing In</a>
              </button>
              <AiOutlineSearch/>
          </div>
        </header>
            
      </div>
    )
}

export default Header;