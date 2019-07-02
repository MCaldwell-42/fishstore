import React from 'react';
import PropTypes from 'prop-types';

import fishShapes from '../../helpers/propz/fishShapes';

import Fish from '../Fish/Fish';
import './Inventory.scss';

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.arrayOf(fishShapes.fishShape),
    addFishToOrder: PropTypes.func.isRequired,
  }

  render() {
    const fishComponents = this.props.fishes.map(fish => (
      <Fish key={fish.id} fish={fish} addFishToOrder={this.props.addFishToOrder}/>
    ));

    return (
      <div className="Inventory">
        <h2>Inventory</h2>
        <ul className="fishes">
          {fishComponents}
        </ul>
      </div>
    );
  }
}

export default Inventory;
