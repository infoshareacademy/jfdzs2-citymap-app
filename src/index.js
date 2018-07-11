import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Results from "./routes/results/results";
import User from "./routes/user/user";
import Favourite from "./routes/fav/fav";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";
import LoginPage from "./routes/loginpage/LoginPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/fav" component={Favourite} />
      <Route path="/results" component={Results} />
      <Route path="/user" component={User} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/loginpage" exact component={LoginPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
