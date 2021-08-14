import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import PlayerPage from "./pages/PlayerPage";
import NoMatchPage from "./pages/NoMatchPage";
import Input from "./pages/Input";
import VIPjx from "./pages/VIPjx";
import IPlayer from "./pages/IPlayer";
import Iframe from "./pages/Iframe";
import Test from "./pages/Test";
import "./index.scss";
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/list/:name" component={ListPage} />
      <Route path="/player/:name" component={PlayerPage} />
      <Route path="/input" component={Input} />
      <Route path="/iplayer/:encdata" component={IPlayer} />
      <Route path="/jx" component={VIPjx} />
      <Route path="/iframe/:url" component={Iframe} />
      <Route path="/test" component={Test} />
      <Route path="*" component={NoMatchPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
