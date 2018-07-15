import React, {PureComponent, Fragment} from "react";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import SignUp from "../signup/signup";

class User extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header/>
                <Menu/>
                <SignUp/>
            </Fragment>
        );
    }
}

export default User;
