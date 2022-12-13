import facebook from '../assets/facebook-icon.png'
import github from '../assets/github-icon.png'
import gmail from '../assets/gmail-icon.png'
import linkedin from '../assets/linkedin-icon.png'
import AOS from 'aos'
import 'aos/dist/aos.css'



const Contact = () => {

    AOS.init({duration: 1000})

    return ( 
        <div className="contacttome-container">
            <div style={{margin: '0 auto'}}>
                <h2 data-aos="fade-down" style={{marginLeft: '0px'}}>დამიკავშირდით</h2>
                <hr data-aos="fade-down" style={{marginTop: '-50px',width: '170px', marginLeft: '25px', height: "25px", background: '#003667', border: '0', borderRadius: '20PX'}} />
            </div>

        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <a href='https://www.facebook.com/' target="_blank"><img style={{width: '60px', height: '60px'}} src={facebook} /></a>
            <a href='https://github.com/GiorgiGochitidze' target="_blank"><img style={{width: '60px', height: '60px'}} src={github} /></a>
            <a href='#' target="_blank"><img style={{width: '60px', height: '60px'}} src={gmail} /></a>
            <a href="https://www.linkedin.com/in/giorgi-gochitidze-5a1840251/" target="_blank"><img style={{width: '60px', height: '60px'}} src={linkedin} /></a>
        </div>
        </div>
     );
}
 
export default Contact;