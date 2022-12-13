import { useState } from 'react'
import '../Home.css'
import moon from '../assets/moon.png'
import moonwhite from '../assets/moonwhite.png'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import Home from '../components/Home'
import Shortsinfo from '../components/Shortsinfo'
import Skills from '../components/Skills'
import Contact from '../components/Contact'


const Header = () => {
    //menu
    const [menu, setMenu] = useState(false)
    const [light, setLight] = useState(true)
    const [dark, setDark] = useState(false)
    //texts
    const [home, setHome] = useState(true)
    const [skills, setSkills] = useState(true)
    const [contact, setContact] = useState(true)
  
    //functions
    const skilldown = () => {
      window.scrollTo(0, 850)
    }

    const homedown = () => {
      window.scrollTo(0, 0)
    }

    const contactdown = () => {
      window.scrollTo(0, 1800)
    }

    return ( 
    <>
        {light && <div> 
          <BrowserRouter>
            <header>
                <nav>
                    <h3>გიორგი</h3>
                    <div>
                        {home && <Link to='/' style={{textDecoration: 'none', color: 'black'}}><p style={{cursor: "pointer"}} onClick={homedown}>მთავარი</p></Link>}
                          {skills && <Link to='/Skills' style={{textDecoration: 'none', color: 'black'}}><p onClick={skilldown} style={{cursor: "pointer"}}>სკილები</p></Link>}
                        {contact && <Link to='/Contact' style={{textDecoration: 'none', color: 'black'}}><p onClick={contactdown} style={{cursor: "pointer"}}>დამიკავშირდი</p></Link>}
                        <img className='dark-moon' style={{width: '25px', height: '25px', marginTop: '-5px', cursor: 'pointer'}} src={moon} />
                    </div>
                        <h3 onClick={() => menu ? setMenu(false) : setMenu(true)} className='menu-button'>MENU</h3>
                </nav>
            </header>
            </BrowserRouter>
            <>
            {menu && <div className='menu-panel-container'>
              <section className='menu-pannel'>
                <div onClick={homedown}>
                  <p>მთავარი</p>
                </div>
                  <div onClick={skilldown}>
                    <p>სკილები</p>
                  </div>
                <div onClick={contactdown}>
                  <p>დამიკავშირდით</p>
                </div>
              </section>
            </div>}
            </>
            </div>
        }
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    </>

     );
}
 
export default Header;