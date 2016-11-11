import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/**
 * The stateless component for building gear items
 */
function GearItemComponent(props) {
  const linkUrl = '/gear/'.concat(props.id);
  return (
    <div className="gear-item-container">
      <Link to={linkUrl}>
        <img src={props.imgSrc} alt={props.altText} />
        <h5>{props.title}</h5>
        <p>{props.description}</p>
        <div className="price-container">
          <span>${props.price}</span>
        </div>
      </Link>
    </div>
  );
}

GearItemComponent.propTypes = {
  /**
   * The img src for the gear image
   */
  imgSrc: PropTypes.string.isRequired,
  /**
   * The alternate text for the gear image
   */
  altText: PropTypes.string.isRequired,
  /**
   * The title to be displayed for the gear
   */
  title: PropTypes.string.isRequired,
  /**
   * The description to be displayed for the gear
   */
  description: PropTypes.string.isRequired,
  /**
   * The price of the gear per day.
   */
  price: PropTypes.number.isRequired,
  /**
   * The price of the gear per day.
   */
  id: PropTypes.number.isRequired,
};

export default GearItemComponent;
