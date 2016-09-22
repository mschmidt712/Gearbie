import React from 'react';
// import { Link, IndexLink } from 'react-router';

const Header = () =>
  (<div>
    <div className="navbar">
      <ul>
        <div className="navbar-links menu-items">
          <img src="./src/assets/Kenzan_Mark_PMS877.svg" alt="Kenzan Logo" />
          <li><a href="a">Explore</a></li>
          <li><a href="a">About</a></li>
          <li><a href="a">Blog</a></li>
          <li><a href="a">Connect</a></li>
        </div>
        <div className="navbar-social-media">
          <img src="./src/assets/Twitter.png" alt="linked-in" />
          <img src="./src/assets/Linkedin.png" alt="linked-in" />
          <img src="./src/assets/Github.png" alt="linked-in" />
          <img src="./src/assets/Facebook.png" alt="linked-in" />
        </div>
        <div className="navbar-links nav-menu">
          <li className="mobile-nav"><a>Menu</a></li>
          <div className="dropdown-content">
            <li><a href="a">Explore</a></li>
            <li><a href="a">About</a></li>
            <li><a href="a">Blog</a></li>
            <li><a href="a">Connect</a></li>
          </div>
        </div>
      </ul>
    </div>
  </div>
  );

export default Header;
