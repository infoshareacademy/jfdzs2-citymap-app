import React, { Component } from 'react';
import './App.css';

import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Menu from "./components/menu/menu"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Menu />
        <Footer />
      </div>
    );
  }
}
export default App;
