import React from 'react';
import classNames from 'classnames';

export function RightArrow(props) {
  const rightProps = Object.assign({}, props);
  let disabled = false;

  if (rightProps.className.indexOf('disabled') > -1) {
    disabled = true;
  } else {
    disabled = false;
  }

  const rightArrowClasses = classNames({
    'explore-arrow-container': true,
    'explore-right-arrow-container': true,
    'arrow-container': true,
    'arrow-disabled': disabled,
  });

  delete rightProps.className;

  return (
    <div {... rightProps}>
      <button className={rightArrowClasses}>
        <i className="material-icons lg shadow">keyboard_arrow_right</i>
      </button>
    </div>
  );
}

export function LeftArrow(props) {
  const leftProps = Object.assign({}, props);
  let disabled = false;

  if (leftProps.className.indexOf('disabled') > -1) {
    disabled = true;
  } else {
    disabled = false;
  }

  const leftArrowClasses = classNames({
    'explore-arrow-container': true,
    'explore-left-arrow-container': true,
    'arrow-container': true,
    'arrow-disabled': disabled,
  });

  delete leftProps.className;

  return (
    <div {... leftProps}>
      <button className={leftArrowClasses}>
        <i className="material-icons lg shadow">keyboard_arrow_left</i>
      </button>
    </div>
  );
}
