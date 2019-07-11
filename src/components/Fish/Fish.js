import React from 'react';
import PropTypes from 'prop-types';

import format from '../../helpers/format';

import fishShape from '../../helpers/propz/fishShapes';

import './Fish.scss';

class Fish extends React.Component {
  static propTypes = {
    fish: fishShape.fishShape,
    addFishToOrder: PropTypes.func.isRequired,
  }

  addClickEvent = (e) => {
    const { fish, addFishToOrder } = this.props;
    e.preventDefault();
    addFishToOrder(fish.id);
  }

  render() {
    const { fish } = this.props;
    const isAvailable = fish.status === 'available';
    // eslint-disable-next-line
    const image = require(`${fish.image}`);
    return (
      <li className="Fish">
        <img src={image} alt={fish.name} />
        <h3 className="name">
          {fish.name}
          <span className="price">{format.formatPrice(fish.price)}</span>
        </h3>
        <p>{fish.desc}</p>
        <button
            className="btn btn-outline-dark"
            disabled={!isAvailable}
            onClick={this.addClickEvent}
          >
            Add To Order
          </button>
        ) : (
          <button disabled={!isAvailable}>Sold Out!</button>
        )}
      </li>
    );
  }
}

export default Fish;
