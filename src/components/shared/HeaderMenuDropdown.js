import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

const HeaderMenuDropdown = ({ clearMenu }) => (
  <div>
    <div className="drop-down-container" key="key">
      <div className="header-menu-dropdown">
        <div>
          <ul>
            <li>
              <FontAwesome name="rocket" className="dropdown-icon" />
              <Link to="/explore/open-source" activeClassName="active">Explore</Link>
            </li>
            <li>
              <FontAwesome name="suitcase" className="dropdown-icon" />
              <Link to="/about/kenzan" activeClassName="active">About</Link>
            </li>
            <li>
              <FontAwesome name="pencil" className="dropdown-icon" />
              <a href="http://techblog.kenzan.com/">Blog</a>
            </li>
            <li>
              <FontAwesome name="globe" className="dropdown-icon" />
              <Link to="/connect" activeClassName="active">Connect</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="dimmer" onClick={clearMenu} />
  </div>
);

HeaderMenuDropdown.propTypes = {
  clearMenu: React.PropTypes.func.isRequired,
};

export default HeaderMenuDropdown;
