import React, { Component } from 'react';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react' 
import MapContainer from './components/MapContainer'

import Header from "./components/header/header"
import Section from "./components/section/section"
import Footer from "./components/footer/footer"
import Menu from "./components/menu/menu"

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container-fluid">
              <div className="row">
              <Header />
                  <div className="col-md-2">
                      <Menu />
                  </div>
                  <div className="col-md-10">
                      
                      <MapContainer google={this.props.google} />
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

