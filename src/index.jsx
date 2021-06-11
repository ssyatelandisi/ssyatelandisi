import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import PlayerPage from "./pages/PlayerPage";
import NoMatchPage from "./pages/NoMatchPage";
import Test from "./pages/Test";
import "./index.scss";
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/list/:name" component={ListPage} />
      <Route path="/player/:name" component={PlayerPage} />
      <Route path="/test" component={Test} />
      <Route path="*" component={NoMatchPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
