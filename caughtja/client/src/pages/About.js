// import React from "react";

// const document = "/Caughtja/caughtja/Assets/Tedla.jpg";

// // function About(){

// //     return (
// //         <div class="d-inline p-2 bg-primary text-white">

// //             <img src="../Assets/Tedla.jpg" alt="Tedla Betsuan" class="rounded-circle">
// //                 Tedla Betsuan
// //             </img>

// //             <img src="../../../../Assets/Josh.jpg" alt="Josh K" class="rounded-circle">
// //                 Josh K
// //             </img>

// //             <img src="https://ca.slack-edge.com/TQ7TNT9V0-UQSKFF4UE-56aed9e3dc99-512" alt="Christopher L Garcia" class="rounded-circle">
// //                 Christopher L Garcia
// //             </img>
        
        
// //         </div>

        
// //     )
// // }

// function About() {
//     if (this.state.document) {
//       const document = this.state.document;
   
//       const mainView = document.data.responsive_image;
//       const tabletView = document.data.responsive_image.tablet;
//       const mobileView = document.data.responsive_image.mobile;
   
//       return (
//         <picture>
//           <source media="(max-width: 400px)" srcSet={mobileView.url} />
//           <source media="(max-width: 900px)" srcSet={tabletView.url} />
//           <source srcSet={mainView.url} />
//           <img src={document.data.illustration.url} alt={document.data.illustration.alt} />
//         </picture>
//       );
//     } else {
//       return null;
//     }
//   }

// export default About;





// import { Route } from "react-router-dom";
import React, { Component } from "react";
// import API from "../utils/API";
// import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import Tedla from "../components/Assets/Tedla.jpg";
import Josh from "../components/Assets/Josh.jpg";
import Chris from "../components/Assets/Chris.jpg";

class About extends Component {
  render(){
    return (
        <Container fluid >
             <Row>
             <Col size="md-6">
                <Jumbotron>
                <h1>WELCOME TO OUR PAGE</h1>
                 </Jumbotron>
                 <div id="welcome">
                   
                 <h2> BY: Chris, JOSH, Tedla </h2>
                 <div className= "imag " >
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                 </div>


                 </div>
                 </Col>
                 </Row>
                </Container>
    )

  }
}

export default About;
