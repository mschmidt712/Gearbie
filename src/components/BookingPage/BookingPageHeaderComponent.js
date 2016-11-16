import React, { PropTypes } from 'react';

function BookingPageHeaderComponent(props) {
  const properties = [];

  props.gearItem.properties.forEach((property, index) => {
    properties.push(
      <div className="property-container" key={index}>
        <h5>{property.title}</h5>
        <p>{property.description}</p>
      </div>
    );
  });

  return (
    <div className="gear-item-overview item-container-box clearfix">
      <div className="overview-text">
        <h3>{props.gearItem.title}</h3>
        <h5>{props.gearItem.owner.accountInfo.fullName}</h5>
        <p>{props.gearItem.owner.accountInfo.city}, {props.gearItem.owner.accountInfo.state}</p>
      </div>
      <div className="overview-image">
        <img src={props.gearItem.imgSrc} alt={props.gearItem.altText} />
      </div>
      <div className="overview-description">
        <div className="divider-line" />
        {properties}
      </div>
    </div>
  );
}

BookingPageHeaderComponent.propTypes = {
  gearItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    properties: PropTypes.arrayOf(PropTypes.object),
    owner: PropTypes.shape({
      accountInfo: PropTypes.shape({
        fullName: PropTypes.string.isRequired,
        city: PropTypes.string,
        state: PropTypes.string,
      }),
    }),
    imgSrc: PropTypes.string.isRequired,
    altText: PropTypes.string,
  }),
};

export default BookingPageHeaderComponent;
