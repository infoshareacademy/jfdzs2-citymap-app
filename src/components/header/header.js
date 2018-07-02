import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CityMapArchitecture from '../../images/architektura_Szczecinv3.png'
import './header.css'
import CityMapLogo from '../../images/City_map_logo.svg';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm">
                <Link to="/" className="brand">
                    <img src={CityMapLogo} alt="Logo aplikacji City Map - Szczecin" className="logo"/>
                </Link>
                <img
                    src={CityMapArchitecture}
                    alt="Panorama sześciu budynków, które są ikonami Szczecina"
                    className="silhouette-city-view"
                />
            </nav>
        )
    }
}

export default Header;