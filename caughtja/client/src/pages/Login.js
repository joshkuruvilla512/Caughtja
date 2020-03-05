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

class Login extends Component {
  render(){
    return (
        <Container fluid>
             <Row>
             <Col size="md-6">
                <Jumbotron>
                <h1>Lend A Helping Hand</h1>
                 </Jumbotron>
                 <div id="welcome">
                   
                 <h2>Find and Create Events Near You to Volunteer</h2>
                 <p>Login to get view or create an event...</p>
                 </div>
                 </Col>
                 </Row>
                </Container>
    )

  }
}

export default Login;
