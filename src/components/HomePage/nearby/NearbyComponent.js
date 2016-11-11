import React, { PropTypes } from 'react';
import $ from 'jquery';
import GearItemComponent from '../../shared/GearItemComponent/GearItemComponent';
import constants from '../../constants.js';

/**
 * The state holding container for Popular Gear Items
 */
class NearbyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      zipCode: this.props.zipCode,
    };
  }

  componentWillMount() {
    const items = [];
    constants.gearItems.forEach((item, index) => {
      items.push(
        <GearItemComponent
          imgSrc={item.imgSrc}
          altText={item.altText}
          title={item.title}
          description={item.description}
          price={item.price}
          id={item.id}
          key={index}
        />
      );
    });

    this.setState({
      items,
    });
  }

  componentDidMount() {
    const gearItemContainer = $('.gear-item-container');
    const width = gearItemContainer.width();
    gearItemContainer.each((index, item) => {
      $(item).css('height', width);
    });
  }

  render() {
    return (
      <div className="nearby-container">
        <div className="header-text">
          <h3>Gear Near You</h3>
          <label htmlFor="zipCode" tabIndex="0">Zip Code</label>
          <div className="zipcode-input">
            <input type="number" placeholder={this.state.zipCode} id="zipCode" name="zipCode" />
          </div>
        </div>
        {this.state.items}
      </div>
    );
  }
}

NearbyComponent.propTypes = {
  zipCode: PropTypes.number.isRequired,
};

export default NearbyComponent;
