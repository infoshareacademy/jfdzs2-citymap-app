import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Results from "./routes/results/results";
import User from "./routes/user/user";
import Favourite from "./routes/fav/fav";
<<<<<<< HEAD
import Login from "./routes/login/login";
import SignUp from "./routes/signup/signup";
import LoginPage from "./routes/loginpage/loginpage";
=======
import Login from "./routes/Login/Login";
import SignUp from "./routes/signup/SignUp";
import LoginPage from "./routes/loginpage/LoginPage";
>>>>>>> 6671d7c74c94b26b460a88d0a325709c19696cf6

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/fav" component={Favourite}/>
            <Route path="/results" component={Results}/>
            <Route path="/user" component={User}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/loginpage" exact component={LoginPage}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
registerServiceWorker();