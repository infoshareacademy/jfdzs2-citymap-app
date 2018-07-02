import React, { Component, Fragment } from "react";
import MapContainer from "./MapContainer";
import Header from "./header/header";
import Geolocation from "./CurrentPositionContainer";

class CurrentPosition extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Geolocation />
      </Fragment>
    );
  }
}
export default CurrentPosition;
