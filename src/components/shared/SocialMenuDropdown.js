import React from 'react';
import FontAwesome from 'react-fontawesome';

/**
 * Social media menu dropdown on mobile.
 */
const SocialMenuDropdown = ({ clearBoth }) => (
  <div>
    <div className="drop-down-container" key="key">
      <div className="mobile-social-dropdown mobile-menu-dropdown">
        <div>
          <ul>
            <a href="htttp://www.twitter.com" target="new" onClick={clearBoth}>
              <li>
                <FontAwesome name="twitter" className="dropdown-icon" />
              </li>
            </a>
            <a href="htttp://www.linkedin.com" target="new" onClick={clearBoth}>
              <li>
                <FontAwesome name="linkedin" className="dropdown-icon" />
              </li>
            </a>
            <a href="htttp://www.github.com" target="new" onClick={clearBoth}>
              <li>
                <FontAwesome name="github" className="dropdown-icon" />
              </li>
            </a>
            <a href="htttp://www.facebook.com" target="new" onClick={clearBoth}>
              <li className="last">
                <FontAwesome name="facebook" className="dropdown-icon" />
              </li>
            </a>
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
