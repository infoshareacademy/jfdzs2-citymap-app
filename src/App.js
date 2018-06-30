import React, {Component} from 'react';
import './App.css';
import {GoogleApiWrapper} from 'google-maps-react'
import MapContainer from './components/MapContainer'
import Header from "./components/header/header"
import { Link } from 'react-router-dom'
// import Section from "./components/section/section"
// import Footer from "./components/footer/footer"
// import Menu from "./components/menu/menu"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MapContainer google={this.props.google}/>
                <Header/>
                <div className="search-wrapper">
                    <label>Znajdź:</label>
                <input type="text" className="form-control" placeholder="Wpisz szukane miejsce..." />
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
                    <Link to="./"><button type="button" className="btn btn-default btn-log">Statystyki</button></Link>
                    <Link to="./"><button type="button" className="btn btn-default btn-log">Zaloguj</button></Link>
                </div>
                {/*<Menu />*/}
            </div>
        );
    }
}

export default App;

