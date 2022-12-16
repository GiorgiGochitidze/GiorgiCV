import { useState } from 'react';
import triangle from '../assets/image.png'
import leftarrow from '../assets/leftarrow.png'



const Shortsinfo = () => {

    return ( 
         <div className='short-info'>
            <div className='info-container'>
                <div className='info'>
                    <h1>HI, I'm Giorgi</h1>
                    <p style={{marginTop: '-20px'}}>Frontend Developer</p>
                    <p>High level experience in<br /> Web development knowledge,<br /> production quality work.</p>
                    <a style={{textDecoration: 'none'}} href='https://www.linkedin.com/in/giorgi-gochitidze-5a1840251/' target="_blank"><button className='contactme-button'>CONTACT ME <img src={leftarrow} style={{width: '40px', height: '40px'}} /></button></a>
                </div>
            </div>

            <img src={triangle} />
        </div>
     );
}
 
export default Shortsinfo;