import React from "react";

function bgImage(){

  return (
      <div className="d-inline p-2 bg-primary text-white justify-content-center">

          <div className= "conatiner imag " > 
            <h1 style={{flex:1,justifyContent: "center",alignItems: "center"}}> Welcome to Helping Hunds</h1>
              
              <ul className="nav justify-content-center">
          
              <li className="nav-item">
                  <img src={"https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}  Alt = "homepage" style= {{flex: 1, backgroundSize: "contain", resizeMode: 'contain', marginLeft: 5, label: "Chris" }} />
              
              </li>
               </ul>          
      
          </div>
      </div>

  )
}

export default bgImage;