import React, { Component } from 'react';
import './App.css';

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
                  <div className="col-md-2">
                      <Menu />
                  </div>
                  <div className="col-md-10">
                      <Header />
                      <Section />
                      <Footer />
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
export default App;
