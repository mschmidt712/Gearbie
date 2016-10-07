import React, { PropTypes } from 'react';

/**
 * A stateless component to hold the posts on the about page.
 */
function TextBoxContainer(props) {
  return (
    <div className="col-3 text-box">
      <h2 className="text-box-header">{props.title}</h2>
      <p className="text-box-content">
        {props.text}
      </p>
      <div className="arrow-forward-container">
        <a className="page-description-link material-icons" href={props.link} target="new">
          <h4 className="page-description-link-text uppercase"> {props.linkText} </h4>
        </a>
      </div>
    </div>
  );
}

TextBoxContainer.propTypes = {
  /**
   * The post tile as a string.
   */
  title: PropTypes.string.isRequired,
  /**
   * The post content as a string.
   */
  text: PropTypes.string.isRequired,
  /**
   * The post link text as a string.
   */
  linkText: PropTypes.string.isRequired,
  /**
   * The post link address as a string.
   */
  link: PropTypes.string.isRequired,
};

export default TextBoxContainer;
