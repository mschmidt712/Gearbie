import React, { PropTypes } from 'react';

function FilterItemComponent(props) {
  return (<div className="filter-item-container">
    <input id={props.id} type="checkbox" onClick={() => { props.clickHandler(props.id); }} />
    <label htmlFor={props.id}>{props.label}</label>
  </div>);
}

FilterItemComponent.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default FilterItemComponent;
