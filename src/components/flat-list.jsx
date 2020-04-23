import React, { Component } from 'react';
import Flat from './flat';


class FlatList extends Component {
  renderList = () => {
    const { flats, selected, select } = this.props;
    return flats.map((flat, index) => <Flat info={flat} key={flat.price} index={index} selected={selected.name === flat.name} select={select} />);
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
