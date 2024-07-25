// client/src/index.jsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/app" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
