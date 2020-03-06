import React from "react";
// import React, { useEffect } from "react";
// import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Events from "./pages/Events";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  function signUp(e) {
    console.log(e)
    let input1 = document.getElementById("input1").value
    let input2 = document.getElementById("input2").value
    console.log(input1, input2)
    let element = document.createElement("p")
    let otherElement = document.getElementById("welcome")
    element.innerHTML = `Welcome ${input1}`
    otherElement.append(element)



  }

  return (
    <Router>
      <div className="App">
        <label htmlFor="email">Email: </label>
        <input id="input1" name="email" type="text" value={email} onChange={(event) => { setEmail(event.target.value) }} /><br />
        <label htmlFor="email">Password: </label>
        <input id="input2" name="password" type="text" value={password} onChange={(event) => { setPassword(event.target.value) }} /><br />
        <button onClick={e => signUp(e)}>Sign Up!</button>

        <div>
          {email} - {password}
        </div>

        <Nav />
        <Switch>
          <Route exact path="/" component={Events} />
          <Route exact path="/Events/" component={Events} />
          <Route exact path="/About/" component={About} />
          <Route exact path="/Contact/" component={Contact} />

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
