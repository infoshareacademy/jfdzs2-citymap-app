import React, { PureComponent, Fragment } from "react";
import Header from "../../components/header/header";
import MapContainer from "../../components/MapContainer";
import Menu from "../../components/menu/menu";
import Login from "../../Login/Login";

class User extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <Menu />
        <Login />
      </Fragment>
    );
  }
}
export default User;
