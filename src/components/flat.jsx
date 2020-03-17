import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    return this.props.select(this.props.index);
  }

  render() {
    return (
      <div className={`card${this.props.selected ? ' active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.info.imageUrl}')` }}>
        <div className="card-category">{this.props.info.price} {this.props.info.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.info.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    );
  }
}

export default Flat;
