import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render () {
        return (
            <div>
                <ul>
                    <Link to="/signIn">Zaloguj</Link>
                    <Link to="/home">Strona główna</Link>
                    <Link to="/user">Konto</Link>
                    <Link to="/search">Znajdź</Link>
                    <Link to="/favorites">Twoje miejsca</Link>
                    <Link to="/category">Kategorie</Link>
                    <Link to="/diagrams">Wykresy</Link>
                </ul>
            </div>
        );
    }
}
export default Menu;
