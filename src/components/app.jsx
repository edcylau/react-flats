import React, { Component } from 'react';
import FlatList from './flat-list.jsx';
import Flat from './flat.jsx';
import GoogleMapReact from 'google-map-react';
import Data from '../../data/flat.js';
import Marker from './marker.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: Data[0],
      flats: Data,
      zoom: 12
    };
  }

  handleSelect = (index) => {
    this.setState({
      selectedFlat: this.state.flats[index]
    });
  }

  render() {
    const center = {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
    return (
      <div>
        <FlatList flats={this.state.flats} select={this.handleSelect} selected={this.state.selectedFlat} />
        <div className="map-container">
          <GoogleMapReact
            defaultCenter={center}
            defaultZoom={this.state.zoom}
          >
          <Marker lat={center.lat} lng={center.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
