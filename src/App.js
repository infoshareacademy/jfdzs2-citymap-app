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
          userPosition: null,
          category: null,
          favList: [],
    };
  }

  onCurrentPositionChange = userPosition => {
      this.setState({
          userPosition,
      });
  };

    // addToFavList = () => {
    //     this.setState({
    //         favList:[...this.state.favList],
    //     })
    // };

    componentDidUpdate() {
        console.log(this.state.favList)
    }

  render() {
    return (
      <div className="App">
        <MapContainer
            google={this.props.google}
            userPosition={this.state.userPosition}
            category={this.state.category}
        />
        <Header />
        <div className="search-wrapper">
          <Menu onCurrentPositionChange={this.onCurrentPositionChange}
                onCategoryChange={(category) => {
                    this.setState({
                        category,
                    })
                }} />
        </div>
      </div>
    );
  }
}

export default App;