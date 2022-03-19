import { useState } from 'react'
import { AiFillCaretUp } from 'react-icons/ai'
import Main from './components/Main'
import './components/css/app.css'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Slide from './components/Slide'


function App() {

  const [janela, changeJanela] = useState(false)

  const backToTop = () => {
    if (window.scrollY >= 100) {
      changeJanela(true)
    } else {
      changeJanela(false)
    }
  }

  const backTo = () => {
    window.scrollTo(0, 0)

  }

  window.addEventListener("scroll", backToTop)

  return (
    <div className="app">
      <Main />
      <Section1 />
      <Section2 />
      <Slide />
      <footer>
        @annyxvs
      </footer>
      <AiFillCaretUp className={janela ? "ativado" : "desativado"} onClick={backTo} />
     </div>
  )
}

export default App;
