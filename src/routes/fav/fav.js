import React, { PureComponent, Fragment } from "react";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import FavouriteList from "../fav/favouritelist";

class Favourite extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header />
                <Menu />
                <FavouriteList/>
            </Fragment>
        );
    }
}
export default Favourite;