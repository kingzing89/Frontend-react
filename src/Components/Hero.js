import React from 'react'
import "../styles/hero.css"
import Img from "../Images/Hero-image.jpeg"
export default function Hero() {
  return (
    <div class="hero-outline" style={{
        width:"auto",
        height:"500px",
        backgroundImage:`url(${Img})`,
        backgroundSize:"cover",
        

    }

    }>

    <h1 class="Title-on-hero">Title Here</h1>
    <p class="text-below">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum</p>

    <button class="orange-button">Register Now</button>







    </div>
  )
}
