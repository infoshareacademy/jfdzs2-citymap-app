import React, { Component } from 'react';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react' 
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
          <div className="container-fluid">
              <div className="row">
              <div >
                 <Header />
                 </div>
                  <div className="col-md-2">
                      <Menu />
                  </div>
                  <div className="col-md-10 m-0 p-0">
                      
                      <MapContainer google={this.props.google} />
                      </div>
                      <div className="col-xl-12">
                      <Footer />
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAU6LPIRtQj-VhbJM3X8C6BEGyXTTlffHE',
  })(App)

