import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Events from "./pages/Events";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login}/>
            {/* <Events /> */}
          {/* </Route> */}
          <Route exact path="/Events/" component={Events}/>
            <Detail />
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
