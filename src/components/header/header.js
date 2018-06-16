import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CityMapLogo from '../../images/City_map_logo.svg'
import CityMapArchitecture from '../../images/architektura_Szczecin.svg'
import './header.css'
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm">
                <div className="container">
                    <div className="row">
                    <div className="col-xs-4">
                        <Link to="./app" className="navbar-brand">
                            <img src={CityMapLogo} alt="Logo aplikacji City Map - Szczecin" className="logo"/>
                        </Link>
                    </div>
                    <div className="col-xs-7">
                        <img src={CityMapArchitecture} alt="Panorama sześciu budynków, które są ikonami Szczecina" className="silhouette-city-view"/>
                    </div>
                    <div className="col-xs-1">
                        <Link to="./"><button className="btn btn-default btn-log">Zaloguj</button></Link>
                    </div>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Header;