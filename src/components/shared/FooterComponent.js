import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/**
 * The App Footer which handles some page navigation.
 * Documentation not working because of bug with React-DocGen and conditionals.
 * https://github.com/reactjs/react-docgen/issues/107
 */
const Footer = ({ display, text, link }) => {
  let footer = '';

  if (display === 'true') {
    footer = (<div className="page-footer">
      <Link to={link} >
        <div className="arrow-link">
          <i className="arrow-icon material-icons orange md">ic_arrow_downward</i>
        </div>
        <h5 className="footer-text"> {text} </h5>
      </Link>
    </div>);
  } else {
    footer = (<div className="page-footer" />);
  }

  return footer;
};

Footer.propTypes = {
    /**
   * A boolean that determines whether or not a footer should be displayed.
   */
  display: PropTypes.string.isRequired,
    /**
   * A string that contains the text to display in the footer.
   */
  text: PropTypes.string.isRequired,
    /**
   * A string that contains the route for the footer link.
   */
  link: PropTypes.string,
};

export default Footer;
