import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Nav from "./components/Nav";
import Main from "./components/Main";
import Index from "./pages/index_page";
import Scss from "./pages/scss";
import Login from "./pages/example_login";
import Shadow from "./pages/example_shadow";

import "./styles/index.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Main>
          <Route exact path="/" component={Index} />
          <Route path="/scss" component={Scss} />
          <Route path="/example_login" component={Login} />
          <Route path="/example_shadow" component={Shadow} />
        </Main>
      </Switch>
    </Router>
  );
}

export default App;
