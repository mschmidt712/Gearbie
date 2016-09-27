import React, { PropTypes } from 'react';
import { Link } from 'react-router';

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
  display: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Footer;
