import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./menu.css";
import * as FontAwesome from "react-icons/lib/fa";

class Menu extends Component {
    _onFindLocationClick = () => {
        navigator.geolocation.getCurrentPosition(position => {
            const curPos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            this.props.onCurrentPositionChange(curPos);
        });
    };

    render() {
        return (
            <div className="app-menu">
                <div className="search-wrapper">
                    <label>Znajdź:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Wpisz szukane miejsce..."
                    />
                    <button type="button" className="btn btn-default btn-log"
                            onClick={this._onFindLocationClick}>Udostępnij swoją loaklizację
                    </button>
                    <h4>lub wybierz kategorię: </h4>
                    <ul>
                        <Link to="/signIn">
                            <li><FontAwesome.FaKey/> Parki</li>
                        </Link>
                        <Link to="/">
                            <li><FontAwesome.FaHome/> Restauracje</li>
                        </Link>
                        <Link to="/">
                            <li><FontAwesome.FaBarChart/> Kawiarnie</li>
                        </Link>
                        <Link to="/user">
                            <li><FontAwesome.FaUser/> Kina</li>
                        </Link>
                        <Link to="/search">
                            <li><FontAwesome.FaSearch/> Wystawy</li>
                        </Link>
                        <Link to="/favorites">
                            <li><FontAwesome.FaStreetView/> Obiekty sportowe</li>
                        </Link>
                        <Link to="/category">
                            <li><FontAwesome.FaBars/> Imprezy</li>
                        </Link>
                    </ul>
                    <ul>
                        <Link to="./fav">
                            <button type="button" className="btn btn-default btn-log"><FontAwesome.FaStreetView/>Zapisane
                                miejsca
                            </button>
                        </Link>
                        <Link to="./results">
                            <button type="button" className="btn btn-default btn-log"><FontAwesome.FaBarChart/>Statystyki
                            </button>
                        </Link>
                        <Link to="./user">
                            <button type="button" className="btn btn-default btn-log"><FontAwesome.FaKey/>Zaloguj
                            </button>
                        </Link>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;
