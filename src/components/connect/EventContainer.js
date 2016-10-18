import React, { PropTypes } from 'react';
import constants from '../../constants';

/**
 * The stateless component for the events displayed on the Connect Page
 */
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
/**
 * The event description as a string.
 */
  description: PropTypes.string.isRequired,
/**
 * The text to be displayed with the event's link as a string.
 */
  linkText: PropTypes.string.isRequired,
/**
 * The link address to get more information on the event as a string.
 */
  linkUrl: PropTypes.string.isRequired,
};

export default EventContainer;
