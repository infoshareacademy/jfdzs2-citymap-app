import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import CurrentPosition from "./components/CurrentPosition";
import Results from "./routes/results/results";
import User from "./routes/user/user";
import Favourite from "./routes/fav/fav";
import Login from "./Login/Login";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/CurrentPosition" component={CurrentPosition} />
      <Route path="/fav" component={Favourite} />
      <Route path="/results" component={Results} />
      <Route path="/user" component={User} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
