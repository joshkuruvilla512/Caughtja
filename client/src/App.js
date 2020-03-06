import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Events from "./pages/Events";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import About from "./pages/About";
import Nav from "./components/Nav";
import { useState } from "react";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // useEffect(() => {
  //   axios.get("/api/hello").then(result => {
  //     console.log(result.data);
  //   })
  // }, [])
  function signUp(e) {
    console.log(e)
    let input1 = document.getElementById("input1").value
    let input2 = document.getElementById("input2").value
    console.log(input1, input2)
    let element = document.createElement("p")
    let otherElement = document.getElementById("welcome")
    element.innerHTML = `Welcome ${input1}`
    otherElement.append(element)
    // fetch("http://localhost:3000/api/events", {
    //   method: "POST",
    //   body: JSON.stringify({ "email": input1, "password": input2 })
    // }).then(function (res) {
    //   let element = document.createElement("p")
    //   // element.innerHTML = res.email
    //   console.log(res)
    // })
  }
  return (
    <Router>
      <div className="App">
        <label for="email">Email: </label>
        <input id="input1" name="email" type="text" value={email} onChange={(event) => { setEmail(event.target.value) }} /><br />
        <label for="email">Password: </label>
        <input id="input2" name="password" type="text" value={password} onChange={(event) => { setPassword(event.target.value) }} /><br />
        <button onClick={e => signUp(e)}>Log In</button>
       
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Events /> */}
          {/* </Route> */}
          <Route exact path="/Events/" component={Events} />
          <Route exact path="/About/" component={About} />
          {/* <Detail /> */}
          {/* </Route> */}
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;