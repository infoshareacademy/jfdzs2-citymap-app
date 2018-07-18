/* global google */
import React, { Component } from "react";
import "./MapContainer.css";

const style = {
    width: "100%",
    height: "100vh",
};

class MapContainer extends Component {
    constructor() {
        super();
        this.state = {
            userPosition: null,
            favList:[],
            currentMarker: null,
        };
        this.mapRef = React.createRef();
        this.initMap = this.initMap.bind(this);
        window.initMap = this.initMap;
        this.markers = [];
    }

    componentDidMount() {
        const apiKey = 'AIzaSyAU6LPIRtQj-VhbJM3X8C6BEGyXTTlffHE';
        const src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.userPosition) {
            if (this.userMarker) {
                this.userMarker.setPosition(nextProps.userPosition);
            } else {
                this.userMarker = new google.maps.Marker({
                    position: nextProps.userPosition,
                    map: this.map,
                })
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
                    location: nextProps.userPosition,
                    radius: '5000',
                    type: [this.props.category]
                },
                (results, status) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        for (let i = 0; i < results.length; i++) {
                            const marker = this.createMarker(results[i]);
                            this.markers.push(marker);
                        }
                    }
                }
            );
        }
    }

            this.map = new maps.Map(mapRef, mapConfig);
            if (userPosition) {
                let marker = new maps.Marker({
                    position: userPosition,
                    map: this.map,
                    title: "nice"
                });
            }
        }
        this.infoWindow.setContent(`${marker.name}`);
        this.infoWindow.open(this.map, marker);

    }

    componentDidUpdate() {
        console.log('map container', this.state.favList)
    }

    render() {
        return (
            <div ref={ el => this.mapRef = el } style={style}>
                loading map...
            </div>
                <div className="fav-list">
                {this.state.currentMarker && <div className="fav-list-add">Dodaj do ulubionych<button className="btn-log" onClick={this.addToFavList}>Dodaj</button></div>}
                <div className="fav-list-all">Ulubione miejsca:</div>
                <div>{this.state.favList.map((item) => <div>{item}</div>)}</div>
                </div>
            </div>
        );
    }
}

export default MapContainer;