import React, { PureComponent, Fragment } from 'react';
import Header from '../../components/header/header.js';
import MapContainer from '../../components/section/MapContainer';
import Menu from "../../components/menu/menu.js";

class User extends PureComponent {
    render() {
        return (
            <Fragment>
                <MapContainer google={this.props.google}/>
                <Header/>
                <Menu />
            </Fragment>
        );
    }
}
export default User;