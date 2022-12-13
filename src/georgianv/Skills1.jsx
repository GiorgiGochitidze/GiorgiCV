import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'



const Skills = () => {

    AOS.init({duration: 1000})

    const colorred = {
        color: 'red',
    }

    const [htmlval, setHtmlval] = useState(0)
    
    return ( 
        <div className="skills-container">
            <div>
            <h2 data-aos="fade-down">სკილები</h2>
            <hr data-aos="fade-down" style={{marginTop: '-50px', width: '170px', marginLeft: '40px', height: "25px", background: '#003667', border: '0', borderRadius: '20PX'}} />
            </div>

            <div className="skills">
                <div data-aos="fade-right" className="html">
                    <label>HTML</label>
                    <div className="skill-lines"><div className="skill-lines2"></div></div><p className="percents">100%</p>
                </div>
                <div data-aos="fade-right" className="css">
                    <label>JAVASCRIPT</label>
                    <div className="skill-lines"><div className="skill-lines2"></div></div><p className="percents">100%</p>
                </div>
                <div data-aos="fade-right" className="javascript">
                    <label>CSS</label>
                    <div className="skill-lines"><div style={{backgroundColor: '#003667', width: '95%', height: '100%', boxSizing: 'border-box', borderRadius: '20px'}}></div></div><p className="percents">95%</p>
                </div>
                <div data-aos="fade-right" className="react">
                    <label>REACT</label>
                    <div className="skill-lines"><div style={{backgroundColor: '#003667', width: '70%', height: '100%', boxSizing: 'border-box', borderRadius: '20px'}} className="skill-lines2"></div></div><p className="percents">70%</p>
                </div>
                <div data-aos="fade-right" className="tailwind-css">
                    <label>TAILWIND CSS</label>
                    <div className="skill-lines"><div style={{backgroundColor: '#003667', width: '30%', height: '100%', boxSizing: 'border-box', borderRadius: '20px'}} className="skill-lines2"></div></div><p className="percents">30%</p>
                </div>
                <div data-aos="fade-right" className="python">
                    <label>PYTHON</label>
                    <div className="skill-lines"><div style={{backgroundColor: '#003667', width: '5%', height: '100%', boxSizing: 'border-box', borderRadius: '20px'}} className="skill-lines2"></div></div><p className="percents">5%</p>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;