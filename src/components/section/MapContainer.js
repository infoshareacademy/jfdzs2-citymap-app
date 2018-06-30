import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {GoogleApiWrapper} from 'google-maps-react'

class MapContainer extends Component {

  componentDidUpdate() {
    this.loadMap(); 
  }

  loadMap() {
    if (this.props && this.props.google) { 
      const {google} = this.props; 
      const maps = google.maps; 

      const mapRef = this.refs.map; 
      const node = ReactDOM.findDOMNode(mapRef); 

      const mapConfig = Object.assign({}, {
        center:{lat:53.4285, lng:14.5528  }, 
        zoom: 13,
        mapTypeId: 'roadmap' 
      })

      this.map = new maps.Map(node, mapConfig); 

    }
  }
  componentDidMount() {

    this.loadMap();
    
    }
  render() {
    const style = { 
      width: '100%', 
      height: '100vh' 
    }
    
    return ( 
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAU6LPIRtQj-VhbJM3X8C6BEGyXTTlffHE',
})(MapContainer)