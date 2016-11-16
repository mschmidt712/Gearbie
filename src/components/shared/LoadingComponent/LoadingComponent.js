import React, { PropTypes } from 'react';

function LoadingComponent(props) {
  let component;

  if (props.loading) {
    component = (<div className="loading-indicator">
      <img src="/assets/icons/hourglass.gif" alt="loading" />
    </div>);
  } else {
    component = <div />;
  }
  return component;
}

LoadingComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default LoadingComponent;
