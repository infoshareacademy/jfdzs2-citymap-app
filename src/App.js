import React, {Component} from 'react';
import './App.css';
import Map from './components/section/MapContainer';
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import { searchNearby } from './utils/googleApiHelpers';
import { Marker } from './components/section/marker';
import { InfoWindow } from './components/section/infowindow';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            places: [],
            pagination: null
        }
    }
    onReady(mapProps, map) {
        const {google} = this.props;
        const opts = {
            location: map.center,
            radius: '500',
            types: ['cafe']
        };
        searchNearby(google, map, opts)
            .then((results, pagination) => {
                this.setState({
                    places: results,
                    pagination
                })
            }).catch((status, result) => {
            // There was an error
        })
    }
    onMapClick() {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }
    render() {
        return (
            <div className="App">
                <Map onReady={this.onReady.bind(this)}
                     google={this.props.google}
                     onClick={this.onMapClick}>
                </Map>
                <Header />
                <Menu />
                <p className="category">{this.state.places.map(place => {
                    return (<div key={place.id}>{place.name}</div>)
                })}</p>
            </div>
        );
    }
}

export default App;

