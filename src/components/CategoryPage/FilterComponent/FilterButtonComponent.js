import React, { PropTypes } from 'react';

function FilterButtonComponent(props) {
  return (
    <button className="filters-link btn btn-secondary" onClick={props.clickHandler}>Filters
      {!props.filtersVisibile &&
        <div>
          <i className="material-icons">keyboard_arrow_right</i>
          <i className="material-icons arrow-2">keyboard_arrow_right</i>
        </div>}
      {props.filtersVisibile &&
        <div>
          <i className="material-icons">keyboard_arrow_left</i>
          <i className="material-icons arrow-2">keyboard_arrow_left</i>
        </div>}
    </button>
  );
}

FilterButtonComponent.propTypes = {
  filtersVisibile: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default FilterButtonComponent;
