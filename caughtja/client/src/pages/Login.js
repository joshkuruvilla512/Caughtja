import React from "react";

function welcome(){

  return (
      <div className="d-inline p-2 bg-primary text-white justify-content-center">

          <div className= "conatiner imag " > 
            <h1 style={{flex:1,justifyContent: "center",alignItems: "center"}}> Welcome to Helping Hunds</h1>
              
              <ul className="nav justify-content-center">
          
              <li className="nav-item">
                  <img src={"https://images.unsplash.com/photo-1538503529202-7a0e79cbb6f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} Alt="signin"  style= {{flex: 1, backgroundSize: "contain", resizeMode: 'contain', marginLeft: 5, label: "Chris" }} />
              
              </li>
               </ul>          
      
          </div>
      </div>

  )
}

export default welcome;