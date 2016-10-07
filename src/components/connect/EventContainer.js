import React, { PropTypes } from 'react';
import constants from '../../constants';

function EventContainer(props) {
  return (
    <div>
      <p
        className="text-box-content"
        dangerouslySetInnerHTML={constants.setInnerHtml(props.description)}
      />
      <div className="arrow-forward-container">
        <a className="page-description-link material-icons" href={props.linkUrl}>
          <h4
            className="text-box-content page-description-link-text uppercase"
            dangerouslySetInnerHTML={constants.setInnerHtml(props.linkText)}
          />
        </a>
      </div>
    </div>
  );
}

EventContainer.propTypes = {
  description: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default EventContainer;
