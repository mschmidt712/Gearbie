import React, { PropTypes } from 'react';

const Footer = ({ display, text }) => {
  let footer = '';

  if (display === 'true') {
    footer = (<div className="page-footer">
      <div className="arrow-link">
        <i className="arrow-icon material-icons orange md">ic_arrow_downward</i>
      </div>
      <h5 className="footer-text"> {text} </h5>
    </div>);
  } else {
    footer = (<div className="page-footer" />);
  }

  return footer;
};

Footer.propTypes = {
  display: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Footer;
