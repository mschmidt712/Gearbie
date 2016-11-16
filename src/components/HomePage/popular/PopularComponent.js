import React from 'react';
import $ from 'jquery';
import GearItemComponent from '../../shared/GearItemComponent/GearItemComponent';
import constants from '../../../constants.js';

/**
 * The state holding container for Popular Gear Items
 */
class PopularComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
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
      <div className="popular-container">
        <h3>Popular Gear</h3>
        {this.state.items}
      </div>
    );
  }
}

export default PopularComponent;
