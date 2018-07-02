import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import CurrentPosition from "./components/CurrentPosition";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/CurrentPosition" component={CurrentPosition} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
