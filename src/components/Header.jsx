import { useState } from 'react'
import '../Home.css'
import moon from '../assets/moon.png'
import moonwhite from '../assets/moonwhite.png'
import { Link, Route, Routes } from 'react-router-dom'
import Home1 from '../georgianv/Home1'


const Header = () => {
    //menu
    const [menu, setMenu] = useState(false)
    const [light, setLight] = useState(true)
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
            <header>
                <nav>
                    <h3>GIORGI</h3>
                    <div>
                        {home && <p style={{cursor: "pointer"}} onClick={homedown}>HOME</p>}
                          {skills && <p onClick={skilldown} style={{cursor: "pointer"}}>SKILLS</p>}
                        {contact && <p onClick={contactdown} style={{cursor: "pointer"}}>Contact Me</p>}
                    </div>
                        <h3 onClick={() => menu ? setMenu(false) : setMenu(true)} className='menu-button'>MENU</h3>
                </nav>
            </header>
            <>
            {menu && <div className='menu-panel-container'>
              <section className='menu-pannel'>
                <div onClick={homedown}>
                  <p>HOME</p>
                </div>
                  <div onClick={skilldown}>
                    <p>SKILLS</p>
                  </div>
                <div onClick={contactdown}>
                  <p>CONTACT ME</p>
                </div>
              </section>
            </div>}
            </>
            </div>
        }
    </>

     );
}
 
export default Header;