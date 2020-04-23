import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import FlatList from './flat-list';
import Data from '../../data/flat';
import Marker from './marker';

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
    const { flats } = this.state;
    this.setState({
      selectedFlat: flats[index]
    });
  }

  render() {
    const { flats, zoom, selectedFlat } = this.state;
    const center = {
      lat: selectedFlat.lat,
      lng: selectedFlat.lng
    };

    return (
      <div>
        <FlatList flats={flats} select={this.handleSelect} selected={selectedFlat} />
        <div className="map-container">
          <GoogleMapReact
            defaultCenter={center}
            defaultZoom={zoom}
          >
            <Marker lat={center.lat} lng={center.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
