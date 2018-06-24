import React, {Component} from 'react';
import './App.css';
import {GoogleApiWrapper} from 'google-maps-react'
import MapContainer from './components/MapContainer'
import Header from "./components/header/header"
// import Section from "./components/section/section"
import Footer from "./components/footer/footer"
import Menu from "./components/menu/menu"
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
                <input type="text" className="form-control" placeholder="Wpisz szukane miejsce" />
                    lub wybierz kategorię:
                    <ul>
                        <li>Parki</li>
                        <li>
                            Restauracje
                        </li>
                        <li>Kina</li>
                        <li>Wystawy</li>
                    </ul>
                </div>
                {/*<Menu />*/}
            </div>
        );
    }
}

export default App;

