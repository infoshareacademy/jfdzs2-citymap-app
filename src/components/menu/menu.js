import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./menu.css";

class Menu extends Component {
    onFindLocationClick = () => {
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
                    <button
                        type="button"
                        className="btn btn-default btn-log"
                        onClick={this.onFindLocationClick}
                    >
                        Udostępnij swoją loaklizację
                    </button>
                    <h4>lub wybierz kategorię: </h4>
                    <ul>
                        <li>
                            <button
                                type="button"
                                className="btn btn-default btn-log"
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.onCategoryChange('park');
                                }}
                            >
                                Restsauracje
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="btn btn-default btn-log"
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.onCategoryChange('restaurant');
                                }}
                            >
                                Parki
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="btn btn-default btn-log"
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.onCategoryChange('cafe');
                                }}
                            >
                                Kawiarnie
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="btn btn-default btn-log"
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.onCategoryChange('movie-theater');
                                }}
                            >
                                Kina
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="btn btn-default btn-log"
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.onCategoryChange('stadium');
                                }}
                            >
                                Obiekty sportowe
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="btn btn-default btn-log"
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.onCategoryChange('night-club');
                                }}
                            >
                                Imprezy
                            </button>
                        </li>
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