import React from 'react';

/**
 * The App Footer which handles some page navigation.
 * Documentation not working because of bug with React-DocGen and conditionals.
 * https://github.com/reactjs/react-docgen/issues/107
 */
function Footer() {
  return (
    <div className="footer-container">
      <div className="link-container">
        <ul>
          <li>About Us</li>
          <li>Insurance, Liability, & Your Gear</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="contact-container">
        <ul>
          <li><h6>Gearbie</h6></li>
          <li>485 S Quail St</li>
          <li>Lakewood, CO 80226</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
