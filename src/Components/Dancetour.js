import React from 'react'
import "../styles/dance.css"
import whitedance from "../Images/White dancing.jpg"
import blackdance from "../Images/dance black man.jpeg"

export default function Dancetour() {
    return (
       
            <div class="Background">
            <h2 class="up-text">Dance Tour</h2>

            <p className='down-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p  className='down-txt'>Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            
            <div class="cards">

                <div class="box">
                    <img src={`${whitedance}`} class="img" alt="white man down" />
                    <div className="back-color">
                    <h4 class="Heading">America</h4>
                    <p  className='down-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    

                </div>

                <div class="box">
                    <img src={`${blackdance}`} class="img" alt="black man" />
                    <div className="back-color">
                    <h4 class="Heading">Asia</h4>
                    <p className='down-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    

                </div>

                <div class="box">
                    <img src={`${whitedance}`} class="img" alt="white shirt man dancing" />
                    <div className='back-color'>
                    <h4 class="Heading">Australia</h4>
                    <p className='down-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    

                </div>

            </div>
            </div>
        
    )
}
