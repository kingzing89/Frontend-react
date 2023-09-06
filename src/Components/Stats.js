import React from 'react'
import "../styles/stats.css"
export default function Stats() {
  return (
    <div class="stat-cover">

        <h1>OUR STATISTICS</h1>


        <p className="sp">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className='sp'>Vivamus lacinia odio vitae vestibulum vestibulum. </p>

        <div class="flex-container1">
            <div class="flex-number">
               1240+
            </div>
            <div class="flex-number">
                2000+
            </div>
            <div class="flex-number">
               1.000+
            </div>


        </div>
        
        <div class="flex-container1">
            <div class="flex-word">
              Club
            </div>
            <div class="flex-word2">
              Active Member
            </div>
            <div class="flex-word">
              Community
            </div>


        </div>



    </div>
  )
}
