
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CityMapLogo from '../../images/City_map_logo.svg'
import './menu.css'
import * as FontAwesome from 'react-icons/lib/fa'

class Menu extends Component {
    render () {
        return (
            <div className="app-menu">
              
                <ul>
                    <Link to="/signIn"><li><FontAwesome.FaKey/> Zaloguj</li></Link>
                    <Link to="/home"><li><FontAwesome.FaHome/> Home</li></Link>
                    <Link to="/home"><li><FontAwesome.FaBarChart/> Wydarzenia</li></Link>
                    <Link to="/user"><li><FontAwesome.FaUser/> Twoje konto</li></Link>
                    <Link to="/search"><li><FontAwesome.FaSearch/> Znajdź</li></Link>
                    <Link to="/favorites"><li><FontAwesome.FaStreetView/> Ulubione</li></Link>
                    <Link to="/category"><li> <FontAwesome.FaBars/> Kategorie</li></Link>
                    <Link to="/diagrams"><li><FontAwesome.FaBarChart/> Wykresy</li></Link>
                   
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
