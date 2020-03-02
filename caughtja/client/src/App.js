import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Events from "./pages/Events";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/Events"]}>
            <Events />
          </Route>
          <Route exact path="/Events/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
