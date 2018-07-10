import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Results from "./routes/results/results";
import User from "./routes/user/user";
import Favourite from "./routes/fav/fav";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/fav" component={Favourite} />
      <Route path="/results" component={Results} />
      <Route path="/user" component={User} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
