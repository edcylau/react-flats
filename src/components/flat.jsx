import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { select, index } = this.props;
    return select(index);
  }

  render() {
    const { selected, info } = this.props;
    return (
      <div className={`card${selected ? ' active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${info.imageUrl}')` }}>
        <div className="card-category">
          {info.price}
          {info.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{info.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    );
  }
}

export default Flat;
