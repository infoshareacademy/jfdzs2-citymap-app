import React, { PureComponent, Fragment } from "react";
import Header from "../../components/header/header";
import MapContainer from "../../components/section/MapContainer";
import Menu from "../../components/menu/menu";
<<<<<<< HEAD

import SignUp from "../../signup/SignUp";
=======
import Login from "../Login/Login";
import SignUp from "../signup/SignUp";
>>>>>>> 6671d7c74c94b26b460a88d0a325709c19696cf6

class User extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <Menu />
        <SignUp />
      </Fragment>
    );
  }
}
export default User;
