import React from 'react'
import "../styles/pricing.css"
import  Ribbon from "../Images/ribbon.png"
export default function Pricing() {
    return (

        <div class="cover">
            <h2 class="up-text">Pricing</h2>

            <p className='down-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className='down-txt'>Vivamus lacinia odio vitae vestibulum vestibulum.</p>

            <div class="cards">

                <div class="ribbon-box">
                <img src={`${Ribbon}`}  alt="ribbon"/>
                

                    <div className="back-color">
                        <h4 class="ribbon-head">America</h4>
                        <p className='down-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="price">
                        $150.00
                    </div>


                </div>

                <div class="ribbon-box">
                <img src={`${Ribbon}`} alt="ribbon"/>
                    <div className="back-color">
                        <h4 class="ribbon-head">Asia</h4>
                        <p className='down-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="price">
                        $200.00
                    </div>


                </div>

                <div class="ribbon-box">
                  <img src={`${Ribbon}`}  alt="ribbon"/>
                    <div className='back-color'>
                        <h4 class="ribbon-head">Australia</h4>
                        <p className='down-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="price">
                        $250.00
                    </div>


                </div>

            </div>
        </div>

    )
}
