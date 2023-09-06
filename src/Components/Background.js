import React from 'react'
import Backimg from "../Images/andre-hunter.jpg"
import "../styles/background.css"
export default function Background() {
  return (
    
    <div style={{
        backgroundImage:`url(${Backimg})`,
        backgroundSize:"cover",
        height:"500px",
        width:"auto",
    }}>
      <div className="overlay">

        <h1 class="txt-over">Lorem ipsum dolor sit amet,<span>consectetur adipiscing elit.</span> <span> Vivamus lacinia odio vitae </span><span>vestibulum vestibulum.</span> </h1>
        <h1 class="Below-txt">Herbert Simon</h1>
     






      






    </div>
    </div>
  )
}
