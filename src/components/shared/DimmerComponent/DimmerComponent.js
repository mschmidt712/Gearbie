import React, { PropTypes } from 'react';

function DimmerComponent(props) {
  return (
    <div className={props.className} onClick={props.clickHandler} />
  );
}

DimmerComponent.propTypes = {
  className: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default DimmerComponent;
