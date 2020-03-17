import React, { Component } from 'react';
import Flat from './flat.jsx';


class FlatList extends Component {
  renderList = () => {
    return this.props.flats.map((flat, index) => <Flat info={flat} key={flat.price} index={index} selected={this.props.selected.name === flat.name} select={this.props.select} />);
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
