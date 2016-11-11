import React, { PropTypes } from 'react';

function GearPropertyComponent(props) {
  let component = '';

  switch (props.type) {
    default: {
      component = (<div className="property-item-container">
        <h5> {props.title} </h5>
        <p> {props.description} </p>
      </div>);
      break;
    }
    case ('text-item'): {
      component = (<div className="property-item-container text-item">
        <h5> {props.title}:</h5>
        <p> {props.description} </p>
      </div>);
      break;
    }
  }

  return component;
}

GearPropertyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default GearPropertyComponent;
