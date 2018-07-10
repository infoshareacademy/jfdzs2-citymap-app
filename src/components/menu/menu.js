import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./menu.css";

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
                        <li>Parki</li>
                        <li>Restauracje</li>
                        <li>Kawiarnie</li>
                        <li>Kina</li>
                        <li>Wystawy</li>
                        <li>Obiekty sportowe</li>
                        <li>Imprezy</li>
                    </ul>
                    <ul>
                        <Link to="./fav">
                            <button type="button" className="btn btn-default btn-log">Zapisane
                                miejsca
                            </button>
                        </Link>
                        <Link to="./results">
                            <button type="button" className="btn btn-default btn-log">Statystyki
                            </button>
                        </Link>
                        <Link to="./user">
                            <button type="button" className="btn btn-default btn-log">Zaloguj
                            </button>
                        </Link>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;
