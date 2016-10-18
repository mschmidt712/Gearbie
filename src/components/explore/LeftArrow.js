import React from 'react';
import classNames from 'classnames';

/**
 * The stateless component for the left arrow of the carousel.
 * Incoming props include class names and click events
 */
function LeftArrow(props) {
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
        <i className="material-icons lg icon-shadow">keyboard_arrow_left</i>
      </button>
    </div>
  );
}

export default LeftArrow;
