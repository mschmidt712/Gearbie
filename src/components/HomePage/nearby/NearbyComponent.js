import React, { PropTypes } from 'react';
import $ from 'jquery';
import GearItemComponent from '../../shared/GearItemComponent/GearItemComponent';
import SearchComponent from '../../shared/SearchComponent/SearchComponent';

function formatGearItemsContainer() {
  const gearItemContainer = $('.gear-item-container');
  const width = gearItemContainer.width();
  gearItemContainer.each((index, item) => {
    $(item).css('height', width);
  });
}

/**
 * The state holding container for Popular Gear Items
 */
class NearbyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    const items = [];

    if (this.props.nearbyGearItems) {
      this.props.nearbyGearItems.forEach((item, index) => {
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
    }

    this.setState({
      items,
    });
  }

  componentDidMount() {
    formatGearItemsContainer();
  }

  componentWillReceiveProps(newProps) {
    const items = [];
    if (newProps.nearbyGearItems) {
      newProps.nearbyGearItems.forEach((item, index) => {
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
    }

    this.setState({
      items,
    });
  }

  componentDidUpdate() {
    formatGearItemsContainer();
  }

  render() {
    return (
      <div className="nearby-container">
        <div className="header-text">
          <h3>Gear Near You</h3>
          <SearchComponent
            inputType="number"
            placeholder={this.props.zipCode}
            clickHandler={this.props.searchHandler}
          />
        </div>
        {this.props.nearbyGearItems && <div>{this.state.items}</div>}
        {!this.props.nearbyGearItems && <div><p>No Results Nearby!</p></div>}
      </div>
    );
  }
}

NearbyComponent.propTypes = {
  zipCode: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  nearbyGearItems: PropTypes.arrayOf(PropTypes.object),
  searchHandler: PropTypes.func.isRequired,
};

export default NearbyComponent;
