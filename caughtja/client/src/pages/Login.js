import { Route } from "react-router-dom";
import React, { Component } from "react";
import API from "../utils/API";
import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Login extends Component {
  render(){
    return (
        <Container fluid>
             <Row>
             <Col size="md-6">
                <Jumbotron>
                <h1>Lend A Helping Hand</h1>
                 </Jumbotron>
                 </Col>
                 </Row>
                </Container>
    )

  }
}

export default Login;



import React from "react";
function Login(){
    return (
        <section class="hero is-medium is-success is-bold">
        <div class="hero-body">
            <div class="container">
                <div class="tile is-ancestor">
                    <div class="tile is-child is-5">
                        <div class="section">
                            <h1 class="title hero-h1">
                                 </h1>
                            <h2 class="subtitle">
                                Find and Create Events Near You to Volunteer
                            </h2>
                            <p>Login to get view or create an event...</p>
                            <br>
                            <form class="login">
                                <div class="field">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <p class="control has-icons-left has-icons-right">
                                        <input class="input" type="email" id="email-input" placeholder="Email">
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-envelope"></i>
                                        </span>
                                        <span class="icon is-small is-right">
                                            <i class="fas fa-check"></i>
                                        </span>
                                    </p>
                                </div>
                                <div class="field">
                                    <label for="exampleInputPassword1">Password</label>
                                    <p class="control has-icons-left">
                                        <input class="input" type="password" id="password-input" placeholder="Password">
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-lock"></i>
                                        </span>
                                    </p>
                                </div>
                                <div class="field">
                                    <p class="control">
                                        <button class="button is-info is-medium" type="submit">
                                            Login
                                        </button>&nbsp;
                                        <a class="button is-info is-medium" href="/signup">
                                            Sign Up
                                        </a>
                                        <div class="small-gap"></div>
                                        <div style="display: none" id="alert" class="alert alert-danger" role="alert">
                                            <span aria-hidden="true"></span><i class="fas fa-exclamation-triangle"></i>
                                            Incorrect email or password <i class="fas fa-exclamation-triangle"></i>
                                        </div>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="tile is-child is-7 has-text-centered">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSENU05MR-V51MGfWaH2Qce58PpQKzti-2cvYA-MVZQ9yBww807" alt="Video Gallery" class="heroImg">
                        <p>
                            An organized collection of volunteer events.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
    }
    module.exports = Login;