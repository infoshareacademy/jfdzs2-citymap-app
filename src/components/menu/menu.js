import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from '../category/category';
import './menu.css'

class Menu extends Component {
    render () {
        return (
            <div className="app-menu">
                <div className="search-wrapper">
                    <label>Znajdź:</label>
                    <input type="text" className="form-control" placeholder="Wpisz szukane miejsce..." />
                    <Category/>
                    <Link to="./fav"><button type="button" className="btn btn-default btn-log">Zapisane miejsca</button></Link>
                    <Link to="./results"><button type="button" className="btn btn-default btn-log">Statystyki</button></Link>
                    <Link to="./user"><button type="button" className="btn btn-default btn-log">Zaloguj</button></Link>
                </div>
            </div>
        );
    }
}
export default Menu;
