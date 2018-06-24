import React, {Fragment, PureComponent} from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import './section.css'
import Home from '../../routes/home/home';
import Search from '../../routes/search/search';
import User from '../../routes/user/user';
import Category from '../../routes/category/category';
import Fav from '../../routes/fav/fav';
import Results from '../../routes/results/results';
import NotFound from '../../routes/notFound/notFound';

class Section extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="layout">
                        <Switch>
                            <Route exact path='/home' component={Home} />
                            <Route path='/user' component={User} />
                            <Route path='/search' component={Search} />
                            <Route path='/category' component={Category} />
                            <Route path='/fav' component={Fav} />
                            <Route path='/results' component={Results} />
                            <Route path='/notFound' component={NotFound} />
                        </Switch>
                    </div>
                </Fragment>
            </BrowserRouter>
        )
    }
}
export default Section;