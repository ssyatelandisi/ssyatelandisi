import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Player from "./pages/Player";
import NoMatch from "./pages/NoMatch";
import "./index.scss";
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/player/:name" component={Player} />
      <Route path="*" component={NoMatch} />
    </Switch>
  </Router>,
  document.getElementById("root")
);