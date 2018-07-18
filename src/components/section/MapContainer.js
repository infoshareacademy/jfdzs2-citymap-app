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
<<<<<<< HEAD
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
=======
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
>>>>>>> 6671d7c74c94b26b460a88d0a325709c19696cf6
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

<<<<<<< HEAD

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
            this.setState({currentMarker:marker})
        });

        return marker;
    }

    addToFavList = () => {
        this.setState({
            favList:[...this.state.favList, this.state.currentMarker.name],
        })
    };

    setInfoWindow(marker) {
        if(!this.infoWindow) {
            this.infoWindow  = new google.maps.InfoWindow();
            document.addEventListener('click', (e) => {
                if(e.target.id === 'add-fav-btn') {
                    alert('dodano do ulubionych');
                }
            })
=======
            this.map = new maps.Map(mapRef, mapConfig);
            if (userPosition) {
                let marker = new maps.Marker({
                    position: userPosition,
                    map: this.map,
                    title: "nice"
                });
            }
>>>>>>> 6671d7c74c94b26b460a88d0a325709c19696cf6
        }
        this.infoWindow.setContent(`${marker.name}`);
        this.infoWindow.open(this.map, marker);

    }

    componentDidUpdate() {
        console.log('map container', this.state.favList)
    }

    render() {
        return (
<<<<<<< HEAD
            <div>
            <div ref={this.mapRef} style={style}>
=======
            <div ref={ el => this.mapRef = el } style={style}>
>>>>>>> 6671d7c74c94b26b460a88d0a325709c19696cf6
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