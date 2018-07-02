import React, {Component} from 'react';
import './App.css';
import MapContainer from './components/section/MapContainer';
import Header from "./components/header/header.js";
import Menu from "./components/menu/menu.js";
import { Link } from 'react-router-dom';
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
                <Menu />
            </div>
        );
    }
}

export default App;

