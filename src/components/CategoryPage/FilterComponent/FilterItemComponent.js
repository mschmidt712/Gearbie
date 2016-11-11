import React, { PropTypes } from 'react';

function FilterItemComponent(props) {
  let component;
  const options = [];
  const className = 'filter-option-container '.concat(props.id);

  switch (props.optionType) {
    default:
      if (props.label) {
        component = (<div className={className}>
          <label htmlFor={props.id}>{props.label}</label>
          <input id={props.id} type="text" />
        </div>);
      } else {
        component = (<div className={className}>
          <input id={props.id} type="text" className="filter-input" />
        </div>);
      }
      break;
    case 'dropdown':
      props.options.forEach((option, index) => {
        options.push(<option value={option} key={index}>{option}</option>);
      });
      if (props.label) {
        component = (<div className={className}>
          <label htmlFor={props.id}>{props.label}</label>
          <select id={props.id}>
            {options}
          </select>
        </div>);
      } else {
        component = (<div className={className}>
          <select id={props.id} className="filter-input">
            {options}
          </select>
        </div>);
      }
      break;
    case 'radio':
      props.options.forEach((option, index) => {
        options.push(
          <div className="radio-container" key={index}>
            <label htmlFor={option}>{option}</label>
            <input type="radio" name={props.id} id={option} />
          </div>
        );
      });
      if (props.label) {
        component = (<div className={className}>
          <label htmlFor={props.id}>{props.label}</label>
          {options}
        </div>);
      } else {
        component = (<div className={className}>
          {options}
        </div>);
      }
      break;
    case 'range':
      if (props.label) {
        component = (<div className={className}>
          <label htmlFor={props.id} className="slider">{props.label}</label>
          <input id={props.id} type="text" value="" className="slider" />
        </div>);
      } else {
        component = (<div className={className}>
          <input id={props.id} type="text" value="" className="slider" />
        </div>);
      }
      break;
  }

  return component;
}

FilterItemComponent.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  optionType: PropTypes.string.isRequired,
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  clickHandler: PropTypes.func.isRequired,
};

export default FilterItemComponent;
