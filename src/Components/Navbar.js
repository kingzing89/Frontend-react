import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faMusic} from '@fortawesome/free-solid-svg-icons'
import "../styles/navstyle.css"

export default function Navbar(){


    return(




        <div class="Navbar">

            <div class="Logo">
            <FontAwesomeIcon icon={faMusic} size="xl" style={{color: "#ffffff",}} />
            <h4 class="heading">Musicology</h4>
            </div>


            <ul class="Menu">

                <li>Home</li>
                <li>Product</li>
                <li>Promo</li>
                <li>About</li>
                <li>Contact</li>




            </ul>

            <div class="search">

            <FontAwesomeIcon icon={faSearch} style={{color: "#ffffff",}} size="lg" />
                
            </div>

          



        </div>



    );

}