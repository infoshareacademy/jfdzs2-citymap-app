/* global google */
import React, { Component } from "react";

const style = {
    width: "100%",
    height: "100vh",
};

class MapContainer extends Component {
    constructor() {
        super();
        this.state = {
            userPosition: null
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
        }
        if (nextProps.category && this.props.category !== nextProps.category) {
            if (this.markers.length) {
                this.markers.forEach((marker) => {
                    marker.setMap(null);
                });
                this.markers = [];
            }
            let service = new google.maps.places.PlacesService(this.map);
            service.nearbySearch(
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
    initMap() {
        const { userPosition } = this.props;
        let mapConfig = {
            center: userPosition ? userPosition : { lat: 53.4285, lng: 14.5528 },
            zoom: 13,
        };
        this.map = new google.maps.Map(this.mapRef.current, mapConfig);
    }

    createMarker(place) {
        let marker = new google.maps.Marker({
            map: this.map,
            position: place.geometry.location
        });
        marker.name = place.name;
        google.maps.event.addListener(marker, "click", () => {
            this.setInfoWindow(marker);
        });

        return marker;
    }

    setInfoWindow(marker) {
        if(!this.infoWindow) {
            this.infoWindow  = new google.maps.InfoWindow();
            document.addEventListener('click', (e) => {
                if(e.target.id === 'add-fav-btn') {
                    alert('dodano do ulubionych');
                }
            })
        }
        this.infoWindow.setContent(`${marker.name}<button id="add-fav-btn">Zapisz do ulubionych!</button>`);
        this.infoWindow.open(this.map, marker);
    }

    render() {
        return (
            <div ref={this.mapRef} style={style}>
                loading map...
            </div>
        );
    }
}

export default MapContainer;