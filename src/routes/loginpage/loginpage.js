import React, { PureComponent, Fragment } from "react";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import Login from "../login/login";
import SignUp from "../signup/signup";

class LoginPage extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header />
                <Menu />
                <Login/>
                <SignUp/>
            </Fragment>
        );
    }
}
export default LoginPage;