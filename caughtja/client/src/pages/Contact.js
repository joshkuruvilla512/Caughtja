import React from "react";
import Tedla from "../components/Assets/Tedla.jpg";
import Josh from "../components/Assets/Josh.jpg";
import Chris from "../components/Assets/Chris.jpg";

function Contact(){

    return (
        <div className="d-inline p-2 bg-primary text-white justify-content-center">

            <div className= "conatiner imag " > 

                  <img src={Chris} alt={Chris} style= {{flex: 1, width: "20rem", height: "20rem", resizeMode: 'contain', marginLeft: 5, label: "Chris" }} />
                  <img src={Josh} alt={Josh} style= {{flex: 1, width: "20rem", height: "20rem", resizeMode: 'contain', marginLeft: 5, label: "Josh"}} />
                  <img src={Tedla} alt={Tedla} style= {{flex: 1, width: "20rem", height: "20rem", resizeMode: 'contain', marginLeft: 5, label: "Tedla"}}/>
                 
        
            </div>
        </div>

    )
}

export default Contact;