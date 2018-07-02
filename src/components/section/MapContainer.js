import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {

  componentDidUpdate() {
    this.loadMap(); 
  }

  loadMap() {

    if (this.props && this.props.google) { 
      const {google} = this.props; 
      const maps = google.maps;

      const mapRef = this.mapRef ;
      const node = ReactDOM.findDOMNode(mapRef); 

      const mapConfig = Object.assign({}, {
        center:{lat:53.4285, lng:14.5528  }, 
        zoom: 13,
        mapTypeId: 'roadmap' 
      });

      this.mapRef = new maps.Map(node, mapConfig);
    }
  }

  componentDidMount() {
    this.loadMap();
    }

  render() {
    const style = { 
      width: '100%', 
      height: '100vh' 
    };
    
    return (
        <div ref={ el => this.mapRef = el } style={style}>
        loading map...
      </div>
    )
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAU6LPIRtQj-VhbJM3X8C6BEGyXTTlffHE',
})(MapContainer)