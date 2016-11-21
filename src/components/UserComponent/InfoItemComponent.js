import React, { PropTypes } from 'react';

function InfoItemComponent(props) {
  return (
    <div className="value-container">
      {!props.editing &&
        <p>{props.value}</p>}
      {props.editing &&
        <input
          placeholder={props.value}
          id={props.id}
          onChange={props.onChange}
        />}
    </div>
  );
}

InfoItemComponent.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  editing: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InfoItemComponent;
