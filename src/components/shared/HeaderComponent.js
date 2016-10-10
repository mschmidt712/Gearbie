import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/**
 * The App Header including navigation and social media links.
 */
const Header = ({ clickEvent }) =>
(<div className="navbar">
  <ul>
    <div className="navbar-links menu-items">
      <Link to="/" onClick={clickEvent}>
        <img src="/assets/Kenzan_Mark_PMS877.svg" alt="Kenzan Logo" />
      </Link>
      <li><Link to="/open-source" activeClassName="active" onClick={clickEvent}>Explore</Link></li>
      <li><Link to="/kenzan" activeClassName="active" onClick={clickEvent}>About</Link></li>
      <li><Link to="/blog" activeClassName="active" onClick={clickEvent}>Blog</Link></li>
      <li><Link to="/connect" activeClassName="active" onClick={clickEvent}>Connect</Link></li>
    </div>
    <div className="navbar-social-media">
      <img src="/assets/Twitter.png" alt="linked-in" />
      <img src="/assets/Linkedin.png" alt="linked-in" />
      <img src="/assets/Github.png" alt="linked-in" />
      <img src="/assets/Facebook.png" alt="linked-in" />
    </div>
  </ul>
</div>
);

Header.propTypes = {
    /**
   * A functions that sends click events to the app component for conditional animations.
   */
  clickEvent: PropTypes.func.isRequired,
};

export default Header;
