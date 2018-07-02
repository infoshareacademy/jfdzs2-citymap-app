import React, { PureComponent, Fragment } from "react";
import Header from "../../components/header/header";
import MapContainer from "../../components/MapContainer";
import Menu from "../../components/menu/menu";

class User extends PureComponent {
  render() {
    return (
      <Fragment>
        <MapContainer google={this.props.google} />
        <Header />
        <Menu />
      </Fragment>
    );
  }
}
export default User;
