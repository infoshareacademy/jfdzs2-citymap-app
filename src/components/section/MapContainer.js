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
    createMarker(place) {
        if (this.props && this.props.google) {
            const {google} = this.props;
            const maps = google.maps;
            let placeLoc = place.geometry.location;
            let marker = new maps.Marker({
                map: this.map,
                position: place.geometry.location
            });
            google.maps.event.addListener(marker, "click", () => {
                this.infowindow.setContent(place.name);
                this.infowindow.open(this.map, marker);
            });
        }
    }

    loadMap() {
        const {userPosition} = this.props;
        if (this.props && this.props.google) {
            const {google} = this.props;
            const maps = google.maps;
            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            this.infowindow = new maps.Map.InfoWindow();
            let service = new maps.places.PlacesService(this.map);
            service.nearbySearch(
                {
                    position: userPosition,
                    radius: 200000,
                    type: ["restaurant"]
                },
                (results, status) => {
                    if (status === maps.places.PlacesServiceStatus.OK) {
                        for (let i = 0; i < results.length; i++) {
                            this.createMarker(results[i]);
                        }
                    }
                }
            );

            let mapConfig = Object.assign(
                {},
                {
                    center: userPosition ? userPosition : {lat: 53.4285, lng: 14.5528},
                    zoom: 13,
                    mapTypeId: "roadmap"
                }
            );

            this.map = new maps.Map(node, mapConfig);
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
            <div ref="map" style={style}>
                loading map...
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAU6LPIRtQj-VhbJM3X8C6BEGyXTTlffHE"
})(MapContainer);
