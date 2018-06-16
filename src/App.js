import React, { Component } from 'react';
import './App.css';

import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Menu from "./components/menu/menu"

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-3"><Menu /></div>
                  <div className="col-md-9"><Header /></div>
              </div>
            <Footer />
          </div>
      </div>
    );
  }
}
export default App;
