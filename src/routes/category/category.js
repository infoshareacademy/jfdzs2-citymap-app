import React, { PureComponent, Fragment } from 'react';
import Header from '../../components/header/header';
import MapContainer from '../../components/section/MapContainer'

class Category extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header />
                <MapContainer google={this.props.google}/>
            </Fragment>
        );
    }
}

export default Category;
