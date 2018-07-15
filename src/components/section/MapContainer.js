import React, {Component} from "react";
import ReactDOM from "react-dom";
import {GoogleApiWrapper} from "google-maps-react";

const style = {
    width: "100%",
    height: "100vh"
};

class MapContainer extends Component {
    constructor() {
        super();
        this.state = {
            userPosition: null
        };
    }

    componentWillReceiveProps(nextProps) {
        const {userPosition} = nextProps;
        this.setState(
            {
                userPosition
            },
            () => {
                this.loadMap();
            }
        );
    }

    loadMap() {
        const {userPosition} = this.props;
        if (this.props && this.props.google) {
            const {google} = this.props;
            const maps = google.maps;
            const mapRef = this.mapRef;

            let mapConfig = Object.assign(
                {},
                {
                    center: userPosition ? userPosition : {lat: 53.4285, lng: 14.5528},
                    zoom: 13,
                    mapTypeId: "roadmap"
                }
            );

            this.map = new maps.Map(mapRef, mapConfig);
            if (userPosition) {
                let marker = new maps.Marker({
                    position: userPosition,
                    map: this.map,
                    title: "nice"
                });
            }
        }
    }

    componentDidMount() {
        this.loadMap();
    }

    render() {
        return (
            <div ref={ el => this.mapRef = el } style={style}>
                loading map...
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAU6LPIRtQj-VhbJM3X8C6BEGyXTTlffHE"
})(MapContainer);
