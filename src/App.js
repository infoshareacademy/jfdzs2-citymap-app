import React, { Component } from "react";
import "./App.css";
import MapContainer from "./components/section/MapContainer";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
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
} from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      curPos: null
    };
  }

  _onCurrentPositionChange = pos => {
    this.setState({
      curPos: pos
    });
  };

  render() {
    return (
      <div className="App">
        <MapContainer
          google={this.props.google}
          userPosition={this.state.curPos}
        />
        <Header />
        <div className="search-wrapper">
          <Menu onCurrentPositionChange={this._onCurrentPositionChange} />
        </div>
      </div>
    );
  }
}

export default App;
