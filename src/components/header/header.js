import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CityMapArchitecture from '../../images/architektura_Szczecinv2.png'
import './header.css'
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm">
                    <div className="col-sm-12 col-xs-12">
                        <img src={CityMapArchitecture} alt="Panorama sześciu budynków, które są ikonami Szczecina" className="silhouette-city-view"/>
                    </div>
                    {/* <div className="col-sm-2">
                        <Link to="./"><button type="button" className="btn btn-default btn-log">Zaloguj</button></Link>
                    </div> */}
            </nav>
        )
    }
}
export default Header;