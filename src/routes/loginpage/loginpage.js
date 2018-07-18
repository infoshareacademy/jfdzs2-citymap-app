import React, { PureComponent, Fragment } from "react";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import Login from "../login/login";

class LoginPage extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="search-wrapper">
                    <Menu />
                </div>
                <Login/>
            </Fragment>
        );
    }
}
export default LoginPage;