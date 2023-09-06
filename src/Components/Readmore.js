import React from 'react'
import blackdance from "../Images/Bald-Dancing.jpg"
import WhiteDance from "../Images/White dancing.jpg"
import "../styles/read.css"
export default function Readmore () {
  return (
    <>
    <div class="container">

        
        <img src={`${blackdance}`} className="Image" alt='boy'/>
        
        <div class="Image right">
            <h1 class="Dance-txt">Amazing Dance</h1>
            <p class="txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span>Vivamus lacinia odio vitae vestibulum vestibulum. </span> 
            </p>
            <div class="Read-More"><p>READ MORE</p></div>
        </div>

        
        
        


       
        





    </div>
    <div class="container">

    
      
    <div class="Image right">
    <h1 class="Dance-txt">Best Dance</h1>
        <p class="txt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span>Vivamus lacinia odio vitae vestibulum vestibulum. </span> 
        </p>
        <div class="Read-More"><p>READ MORE</p></div>

    </div>
    <img src={`${WhiteDance}`} className="Image" alt='boy'/>



    </div>
    
    </>
  )
}
