import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Results from "./routes/results/results.js";
import User from "./routes/user/user.js";
import Favourite from "./routes/fav/fav.js";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path='/fav' component={Favourite} />
            <Route path='/results' component={Results} />
            <Route path='/user' component={User} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
