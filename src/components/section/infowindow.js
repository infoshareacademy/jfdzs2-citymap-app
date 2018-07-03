import React, { Component } from 'react';

export class InfoWindow extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (this.props.map !== prevProps.map) {
            this.renderInfoWindow();
        }
        if (this.props.visible !== prevProps.visible) {
            this.props.visible ?
                this.openWindow() :
                this.closeWindow();
        }
    }
    openWindow() {
        this.infowindow
            .open(this.props.map, this.props.marker);
    }
    closeWindow() {
        this.infowindow.close();
    }
    renderInfoWindow() {
        let {map, google, mapCenter} = this.props;

        const iw = this.infowindow = new google.maps.InfoWindow({
            content: ''
        });
    }
    render() {
        return null;
    }
}
