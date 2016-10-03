import React from 'react';
import { Link } from 'react-router';

/**
 * The App Header including navigation and social media links.
 */
const Header = () =>
  (<div>
    <div className="navbar">
      <ul>
        <div className="navbar-links menu-items">
          <Link to="/">
            <img src="/assets/Kenzan_Mark_PMS877.svg" alt="Kenzan Logo" />
          </Link>
          <li><Link to="/explore/open-source" activeClassName="active">Explore</Link></li>
          <li><Link to="/about/kenzan" activeClassName="active">About</Link></li>
          <li><a href="a">Blog</a></li>
          <li><Link to="/connect" activeClassName="active">Connect</Link></li>
        </div>
        <div className="navbar-social-media">
          <img src="/assets/Twitter.png" alt="linked-in" />
          <img src="/assets/Linkedin.png" alt="linked-in" />
          <img src="/assets/Github.png" alt="linked-in" />
          <img src="/assets/Facebook.png" alt="linked-in" />
        </div>
      </ul>
    </div>
  </div>
  );

export default Header;
