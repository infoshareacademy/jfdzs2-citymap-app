import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CityMapLogo from '../../images/City_map_logo.svg'
import './menu.css'

class Menu extends Component {
    render () {
        return (
            <div className="app-menu">
                <Link to="./app" className="brand">
                    <img src={CityMapLogo} alt="Logo aplikacji City Map - Szczecin" className="logo"/>
                </Link>
                <ul>
                    <Link to="/signIn"><li><span><img className="image-icon" src="../../images/svg/locked.svg" alt="Zaloguj"/></span></li></Link>
                    <Link to="/home"><li><span><img className="image-icon" src="../../images/svg/home.svg" alt="Strona głowna"/></span></li></Link>
                    <Link to="/home"><li><span><img className="image-icon" src="../../images/svg/calendar.svg" alt="Najbliższe wydarzenia"/></span></li></Link>
                    <Link to="/user"><li><span><img className="image-icon" src="../../images/svg/user.svg" alt="Konto"/></span></li></Link>
                    <Link to="/search"><li><span><img className="image-icon" src="../../images/svg/search.svg" alt="Znajdź"/></span></li></Link>
                    <Link to="/favorites"><li><span><img className="image-icon" src="../../images/svg/star.svg" alt="Twoje miejsce"/></span></li></Link>
                    <Link to="/category"><li><span><img className="image-icon" src="../../images/svg/four-black-squares.svg" alt="Kategorie"/></span></li></Link>
                    <Link to="/diagrams"><li><span><img className="image-icon" src="../../images/svg/database.svg" alt="Wykresy"/></span></li></Link>
                </ul>
                <ul>
                    <Link to="/app">PL </Link>
                    <Link to="/english">EN </Link>
                </ul>
            </div>
        );
    }
}
export default Menu;
