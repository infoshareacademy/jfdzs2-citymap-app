import React, { Component, Fragment } from "react";
import MapContainer from "./MapContainer";
import Header from "./header/header";

class CurrentPosition extends Component {
  render() {
    return (
      <Fragment>
        <MapContainer google={this.props.google} />
        <Header />
      </Fragment>
    );
  }
}
export default CurrentPosition;
