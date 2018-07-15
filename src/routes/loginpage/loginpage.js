import React, { PureComponent, Fragment } from "react";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import Login from "../login/login";

class LoginPage extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header />
                <Menu />
                <Login/>
            </Fragment>
        );
    }
}
export default LoginPage;