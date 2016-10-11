import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

/**
 * Social media menu dropdown on mobile.
 */
const SocialMenuDropdown = ({ clearBoth }) => (
  <div>
    <div className="drop-down-container" key="key">
      <div className="mobile-social-dropdown">
        <div>
          <ul>
            <Link to="htttp://www.twitter.com" onClick={clearBoth}>
              <li>
                <FontAwesome name="twitter" className="dropdown-icon" />
              </li>
            </Link>
            <Link to="htttp://www.linkedin.com" onClick={clearBoth}>
              <li>
                <FontAwesome name="linkedin" className="dropdown-icon" />
              </li>
            </Link>
            <Link to="htttp://www.github.com" onClick={clearBoth}>
              <li>
                <FontAwesome name="github" className="dropdown-icon" />
              </li>
            </Link>
            <Link to="htttp://www.facebook.com" onClick={clearBoth}>
              <li>
                <FontAwesome name="facebook" className="dropdown-icon" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
    <div className="dimmer" onClick={clearBoth} />
  </div>
);

SocialMenuDropdown.propTypes = {
  clearBoth: React.PropTypes.func.isRequired,
};

export default SocialMenuDropdown;
