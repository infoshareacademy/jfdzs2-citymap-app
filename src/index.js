import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Results from "./routes/results/results";
import User from "./routes/user/user";
import Favourite from "./routes/fav/fav";
<<<<<<< HEAD
import Login from "./Login/Login";
=======
import registerServiceWorker from './registerServiceWorker';
>>>>>>> dd31f04813e85f4bdab8668aa5c4c9d2563c3d39

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/fav" component={Favourite} />
      <Route path="/results" component={Results} />
      <Route path="/user" component={User} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root"));
registerServiceWorker();
