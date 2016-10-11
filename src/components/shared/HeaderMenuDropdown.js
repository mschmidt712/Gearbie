import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

const HeaderMenuDropdown = ({ clearBoth }) => (
  <div>
    <div className="drop-down-container" key="key">
      <div className="mobile-menu-dropdown">
        <div>
          <ul>
            <Link to="/open-source" activeClassName="active" onClick={clearBoth}>
              <li>
                <FontAwesome name="rocket" className="dropdown-icon" />
                Explore
              </li>
            </Link>
            <Link to="/kenzan" activeClassName="active" onClick={clearBoth}>
              <li>
                <FontAwesome name="suitcase" className="dropdown-icon" />
                About
              </li>
            </Link>
            <Link to="/blog" activeClassName="active" onClick={clearBoth}>
              <li>
                <FontAwesome name="pencil" className="dropdown-icon" />
                Blog
              </li>
            </Link>
            <Link to="/connect" activeClassName="active" onClick={clearBoth}>
              <li>
                <FontAwesome name="globe" className="dropdown-icon" />
                Connect
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
    <div className="dimmer" onClick={clearBoth} />
  </div>
);

HeaderMenuDropdown.propTypes = {
  clearBoth: React.PropTypes.func.isRequired,
};

export default HeaderMenuDropdown;
