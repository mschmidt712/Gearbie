import React from 'react';
import classNames from 'classnames';

/**
 * The stateless component for the right arrow of the carousel.
 * Incoming props include class names and click events
 */
function RightArrow(props) {
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
        <i className="material-icons lg icon-shadow">keyboard_arrow_right</i>
      </button>
    </div>
  );
}

export default RightArrow;
