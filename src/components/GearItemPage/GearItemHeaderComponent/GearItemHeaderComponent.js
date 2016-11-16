import React, { PropTypes } from 'react';

function GearItemHeaderComponent(props) {
  return (
    <div>
      <h2>{props.gearItem.title}</h2>
      <div className="img-price-container">
        <img src={props.gearItem.imgSrc} alt={props.gearItem.altText} />
        <p className="price">{props.gearItem.price}</p>
      </div>
    </div>
  );
}

GearItemHeaderComponent.propTypes = {
  gearItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    altText: PropTypes.string,
    price: PropTypes.number.isRequired,
  }),
};

export default GearItemHeaderComponent;
